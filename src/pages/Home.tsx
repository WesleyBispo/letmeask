
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import Button from '../components/Button'


import '../styles/auth.scss'



export default function Home() {
    const navigate = useNavigate();
    const { user, singInWithGoogle } = useAuth();

    async function handleCreateRoomWithGoogle() {
        try {
            if (!user) {
                await singInWithGoogle()
            }
            navigate('/rooms/new');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Letmeask" />

                    <button className='create-room' onClick={handleCreateRoomWithGoogle}>
                        <img src={googleIcon} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input
                            type='text'
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}  