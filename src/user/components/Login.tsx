import { useForm } from '../../hooks/useForm'
import LoginImage from '../../illustrations/login.png'
import { useUser } from '../hooks/useUser'
import './login.css'

export const Login = () => {

    const { handleUser } = useUser();

    const { forms, handleInputChange } = useForm({
        name: '',
        imgUrl: '',
        active: true
    });

    return (
        <div className="login">
            <div className="login__container">
                <h1>NotesApp</h1>
                <p>Before continue, enter your name</p>
                <div className="login__container__input">
                    <input type="text" onChange={handleInputChange} name="name" placeholder='Name' />
                </div>
                <div className="login__container__input">
                    <input type="text" onChange={handleInputChange} name="imageUrl" placeholder='URL of the image of perfil' />
                </div>
                <button onClick={() => handleUser(forms)}>Ingresar</button>
            </div>
            <img src={LoginImage} alt="" />
        </div>
    )
}
