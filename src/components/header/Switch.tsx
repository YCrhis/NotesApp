import { useState } from 'react'
import './switch.css'

export const Switch = () => {

    const [mode, setMode] = useState(true);

    const handleChangeMode = () => {
        setMode(!mode)
    }

    return (
        <div className="switch icon__animation" onClick={handleChangeMode}>
            <p><span>Mode</span></p>
            {mode ?
                <i className="fa-solid fa-sun"></i>
                :
                <i className="fa-solid fa-moon"></i>
            }
        </div>
    )
}
