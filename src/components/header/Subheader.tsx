import { useNotes } from '../../Notes/hooks/useNote'
import './subheader.css'
import { DateNote } from '../../helpers/DateNote';

export const Subheader = () => {

    const { changeState, noteGeneral } = useNotes();

    const { active } = noteGeneral;

    const { today } = DateNote();

    const handleChange = (data: string) => {
        changeState(data)
    }

    return (
        <div className="subheader">
            <div className="subheader__user">
                <img src="https://giffiles.alphacoders.com/212/212876.gif" alt="" />
                <div className="subheader__userInformation">
                    <h5>Yeridi Crhis</h5>
                    <p>Created at: {today}</p>
                </div>
            </div>
            <div className="subheader__options">
                <button
                    onClick={() => handleChange('Interesting')}
                    className={active === 'Interesting' ? 'button__active' : ''}
                ><i className="fa-solid fa-crown"></i> Interesting
                </button>
                <button
                    onClick={() => handleChange('No Interesting')}
                    className={active === 'No Interesting' ? 'button__active' : ''}
                >
                    <i className="far fa-sad-cry"></i> No Interesting
                </button>
                <button
                    onClick={() => handleChange('All')}
                    className={active === 'All' ? 'button__active' : ''}
                >
                    <i className="far fa-globe"></i> All
                </button>
            </div>
        </div>
    )
}
