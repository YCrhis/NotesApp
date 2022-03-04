import './notelist.css'
import { useNotes } from "../hooks/useNote";
import { NoteCard } from "./NoteCard";
import { AnimatePresence } from 'framer-motion';
import { NotFound } from '../../components/NotFound/NotFound';

export const NoteList = () => {
    const { lisInteresting, listNotInteresting, notes, noteGeneral } = useNotes();

    const { active } = noteGeneral;

    const renderContent = () => {
        if (active === 'All') {
            if (notes.length !== 0) {
                return (
                    notes.map(note => <NoteCard key={note.id} note={note} />)
                )
            } else {
                return <NotFound />
            }
        }
        if (active === 'Interesting') {
            if (lisInteresting.length !== 0) {
                return (
                    lisInteresting.map(note => <NoteCard key={note.id} note={note} />)
                )
            } else {
                return <NotFound />
            }
        }
        if (active === 'No Interesting') {
            if (listNotInteresting.length !== 0) {
                return (
                    listNotInteresting.map(note => <NoteCard key={note.id} note={note} />)
                )
            } else {
                return <NotFound />
            }
        }
    }

    return (
        <div className="notelist">
            <h2>List Of {active}</h2>
            <AnimatePresence>
                {renderContent()}
            </AnimatePresence>
        </div>
    )
}
