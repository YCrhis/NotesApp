import { DateNote } from "../../helpers/DateNote"
import { useForm } from "../../hooks/useForm"
import { useNotes } from "../../Notes/hooks/useNote"
import { ModalContext } from "../../Modal/context/ModalContext"
import './addnote.css'
import { useContext } from "react"
import { NumberRandom } from "../../helpers/NumberRandom"

export const AddNote = () => {

    const { today } = DateNote();

    const { num } = NumberRandom();

    const { handleOpen, modalState } = useContext(ModalContext);

    const { active } = modalState;

    const { forms, handleInputChange } = useForm({
        id: num,
        interesting: true,
        description: '',
        title: '',
        created: today
    });

    const { addNote } = useNotes();

    const handleCloseModel = () => {
        handleOpen({ active, name: 'close' })
    }

    const handleSubmit = () => {
        if (forms.description === '' || forms.title === '') {
            alert('ingrese datos')
        }
        else {
            addNote(forms);
            handleCloseModel();
        }

    }

    return (
        <div className="form">
            <p className="form__label">Title* </p>
            <div className="form__input">
                <input
                    type="text"
                    onChange={handleInputChange}
                    name="title"
                />
                <i className="fa-solid fa-book"></i>
            </div>
            <p className="form__label">Description* </p>
            <div className="form__input">
                <textarea
                    name="description"
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleSubmit}>Send</button>
        </div>
    )
}
