import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export const useNotes = () => {
    const { notestate, toggleNote, addNote, changeState, handleDeleteNote } = useContext(NotesContext);

    const { notes } = notestate

    return {
        noteGeneral: notestate,
        notes: notes,
        notinteresting: notes?.filter(note => !note.interesting).length,
        interesting: notes?.filter(note => note.interesting === true).length,
        lisInteresting: notes?.filter(note => note.interesting === true),
        listNotInteresting: notes?.filter(note => note.interesting === false),
        toggleNote,
        addNote,
        changeState,
        handleDeleteNote
    }

}