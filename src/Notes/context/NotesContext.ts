import { createContext } from "react";
import { Note, NoteState } from "../interfaces/interfaces";


export type NoteContextProps = {
    notestate: NoteState,
    toggleNote: (id: number) => void;
    addNote: (note: Note) => void;
    changeState: (action: string) => void;
    handleDeleteNote: (id: number) => void;
}

export const NotesContext = createContext<NoteContextProps>({} as NoteContextProps);