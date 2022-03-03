import './notelist.css'
import { useNotes } from "../hooks/useNote";
import { NoteCard } from "./NoteCard";
import { AnimatePresence } from 'framer-motion';

export const NoteList = () => {
    const { lisInteresting, listNotInteresting, notes, noteGeneral } = useNotes();

    const { active } = noteGeneral;

    console.log(notes)

    return (
        <div className="notelist">
            <h2>List Of {active}</h2>
            <AnimatePresence>
                {active === 'All' &&
                    notes.map(note => <NoteCard key={note.id} note={note} />)
                }
                {active === 'Interesting' &&
                    lisInteresting.map(note => <NoteCard key={note.id} note={note} />)
                }
                {active === 'No Interesting' &&
                    listNotInteresting.map(note => <NoteCard key={note.id} note={note} />)
                }
            </AnimatePresence>
        </div>
    )
}
