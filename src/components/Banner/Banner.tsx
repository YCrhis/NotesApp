import './banner.css'
import person from '../../illustrations/person.png'


export const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__container">
                <h1>Welcome to Notes App</h1>
                <img src={person} alt="" />
            </div>
        </div>
    )
}
