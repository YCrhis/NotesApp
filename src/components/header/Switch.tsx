import { useState } from 'react'
import './switch.css'

export const Switch = () => {

    const [mode, setMode] = useState(true);

    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme: any;
    let clickedClass = "clicked";


    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);



    } else {
        body.classList.add(lightTheme);

        /* for (var i = 0; i = header.length; i++) {
            header[i].classList.add(headercolor)
        } */

    }

    const switchTheme = (e: any) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    const handleChangeMode = (e: any) => {
        setMode(!mode)
        switchTheme(e)
    }

    return (
        <div className="switch icon__animation" onClick={(e) => handleChangeMode(e)}>
            <p><span>Mode</span></p>
            {mode ?
                <i className="fa-solid fa-sun"></i>
                :
                <i className="fa-solid fa-moon"></i>
            }
        </div>
    )
}
