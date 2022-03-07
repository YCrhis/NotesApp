import { useState } from "react"
import { Login } from "../../user/components/Login"
import './presentation.css'

export const Presentation = () => {

    window.localStorage.setItem('initial', 'false')

    const [value, setValue] = useState(
        window.localStorage.getItem('initial') || ''
    )

    const handleChangePage = (e: string) => {
        if (e === 'c') {
            setValue('true')
            window.localStorage.setItem('initial', value)
        } else {
            window.open('http://www.google.com');
        }

    }

    console.log(value)

    const renderPage = () => {
        if (value === 'false') {
            return (
                <div className="welcome">
                    <div className="welcome__container">
                        <h3>WELCOME TO MY APPLICATION</h3>
                        <h5>You can go to the app or you can see the code</h5>
                        <div className="welcome__options">
                            <button onClick={() => handleChangePage('c')}>Go <i className="fa-solid fa-arrow-right"></i></button>
                            <button onClick={() => handleChangePage('g')}>Github <i className="fa-brands fa-github-alt"></i></button>
                        </div>
                    </div>
                </div>
            )
        } else { return <Login /> }

    }


    return renderPage();
}
