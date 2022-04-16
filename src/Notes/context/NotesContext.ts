import { createContext } from "react";
import { Note, NoteState } from "../interfaces/interfaces";


export type NoteContextProps = {
    toggleNote: (id: number) => void;
    addNote: (note: Note) => void;
    changeState: (action: string) => void;
    handleDeleteNote: (id: number) => void;
    notestate: NoteState,
}

export const NotesContext = createContext<NoteContextProps>({} as NoteContextProps);