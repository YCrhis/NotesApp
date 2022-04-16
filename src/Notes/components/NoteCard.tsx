import './notecard.css';
import { useNotes } from "../hooks/useNote";
import { Note } from "../interfaces/interfaces";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cardAnimation, transition } from '../../animations';

interface NoteCardProps {
    note: Note
}

export const NoteCard = ({ note }: NoteCardProps) => {

    const { toggleNote, handleDeleteNote } = useNotes();

    const [open, setOpen] = useState(false);

    const handleNoInteresting = () => {
        toggleNote(note.id)
    }

    const handleOpenOptions = () => {
        setOpen(!open)
    }

    return (
        <motion.div
            style={{ background: note.interesting ? '' : 'rgb(59, 35, 47)' }}
            className="card"
            initial="start"
            animate="in"
            exit="exit"
            transition={transition}
            variants={cardAnimation}
            key={"new"}
        >
            <h4><span>Note</span> / {note.title} </h4>
            <p className='card__date'>Created at: {note.created}</p>
            <p className='card__description'>
                {note.description}
            </p>
            <div className="icon__animation">
                <i className="fa-solid fa-star" onClick={handleNoInteresting}></i>
            </div>
            <div className="icon__animation">
                <i className="fa-solid fa-trash-can second" onClick={handleOpenOptions}></i>
            </div>
            {
                open &&
                <div className="card__actions">
                    <h4>Do you want to delete this note?</h4>
                    <div>
                        <button onClick={() => handleDeleteNote(note.id)}>Yes</button>
                        <button onClick={handleOpenOptions}>No</button>
                    </div>
                </div>
            }
        </motion.div>
    )
}
