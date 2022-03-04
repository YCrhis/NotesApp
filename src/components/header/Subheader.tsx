import { useNotes } from '../../Notes/hooks/useNote'
import './subheader.css';
import { useUser } from '../../user/hooks/useUser';

export const Subheader = () => {

    const { changeState, noteGeneral } = useNotes();

    const { userstate } = useUser();

    const { active } = noteGeneral;

    const handleChange = (data: string) => {
        changeState(data)
    }

    return (
        <div className="subheader">
            <div className="subheader__user">
                <img src={userstate.imageUrl} alt="" />
                <div className="subheader__userInformation">
                    <h5>{userstate?.name}</h5>
                    <p>Created at: {userstate?.created}</p>
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
                    <i className="fa-solid fa-poo"></i> No Interesting
                </button>
                <button
                    onClick={() => handleChange('All')}
                    className={active === 'All' ? 'button__active' : ''}
                >
                    <i className="fa-solid fa-robot"></i> All
                </button>
            </div>
        </div>
    )
}
