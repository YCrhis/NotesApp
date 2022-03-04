import { Switch } from '../../components/header/Switch'
import { useForm } from '../../hooks/useForm'
import LoginImage from '../../illustrations/login.png'
import { useUser } from '../hooks/useUser'
import { DateNote } from '../../helpers/DateNote'
import './login.css'

export const Login = () => {

    const { handleUser } = useUser();

    const { today } = DateNote();

    const { forms, handleInputChange } = useForm({
        name: '',
        imgUrl: '',
        active: true,
        created: today
    });

    const handleLogin = async () => {
        if (forms.name === '' || forms.imageUrl === '') {
            alert('Ingrese todos los datos')
        } else {
            await handleUser(forms)
        }
    }

    return (
        <div className="login">
            <div className="login__theme">
                <Switch />
            </div>
            <div className="login__container">
                <h1>NotesApp</h1>
                <p>Before continue, enter your name</p>
                <div className="login__container__input">
                    <input type="text" onChange={handleInputChange} name="name" placeholder='Name' />
                </div>
                <div className="login__container__input">
                    <input type="text" onChange={handleInputChange} name="imageUrl" placeholder='URL of the image of perfil' />
                </div>
                <button onClick={handleLogin}>Ingresar</button>
            </div>
            <img src={LoginImage} alt="login" />
        </div>
    )
}
