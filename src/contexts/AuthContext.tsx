import { createContext, ReactNode, useState, useEffect } from "react";
import { firebase, auth } from "./../services/firebase"

type User = {
    id: string;
    name: string;
    avatar: string;
}

type AuthContextType = {
    user: User | undefined;
    singInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextType)
export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user

                if (!displayName || !photoURL) {
                    throw new Error("Missing information from Google Account")
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }

        })

        return () => unsubscribe()
    }, [])

    async function singInWithGoogle() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider(); // Usa 'auth' como a instância do Firebase
            const result = await auth.signInWithPopup(provider);
            if (result.user) {
                const { displayName, photoURL, uid } = result.user

                if (!displayName || !photoURL) {
                    throw new Error("Missing information from Google Account")
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }



        } catch (error) {
            console.error(error);
        }

    }
    return (
        <AuthContext.Provider value={{ user, singInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )

}