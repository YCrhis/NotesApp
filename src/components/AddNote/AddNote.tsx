import { DateNote } from "../../helpers/DateNote"
import { useForm } from "../../hooks/useForm"
import { useNotes } from "../../Notes/hooks/useNote"
import './addnote.css'

export const AddNote = () => {

    const { today } = DateNote()

    const { forms, handleInputChange } = useForm({
        id: 0,
        interesting: true,
        description: '',
        title: '',
        created: today
    });

    const { addNote } = useNotes();

    const handleSubmit = () => {
        addNote(forms);
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
