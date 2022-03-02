import { ChangeEvent, useState } from "react"
import { DateNote } from "../../helpers/DateNote"
import { useNotes } from "../../Notes/hooks/useNote"
import { Note } from "../../Notes/interfaces/interfaces"
import './addnote.css'

export const AddNote = () => {

    const { today } = DateNote()

    const { addNote } = useNotes();

    const [newNote, setNewNote] = useState<Note>({
        id: 0,
        interesting: true,
        description: '',
        title: '',
        created: today
    })

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target
        setNewNote({
            ...newNote,
            [name]: value
        })
    }

    const handleSubmit = () => {
        addNote(newNote);
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
