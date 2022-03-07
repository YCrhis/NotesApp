import { useEffect, useReducer } from 'react';
import { Note, NoteState } from '../interfaces/interfaces';
import { NoteReducer } from './NoteReducer';
import { NotesContext } from './NotesContext';
import { DateNote } from '../../helpers/DateNote';

const { today } = DateNote();


interface props {
    children: JSX.Element | JSX.Element[]
}

const NotesProvider = ({ children }: props) => {

    const INITIAL_STATE: NoteState = {
        notesCount: 2,
        notes: [
            {
                id: 1,
                description: 'Welcome to NotesApp, here you can write all the notes you want. If you liked the project leave a comment on my social networks :)',
                interesting: true,
                title: 'Hello there',
                created: today
            },
        ],
        active: 'All',
    }

    const localData = localStorage.getItem('notes');

    const [notestate, dispatch] = useReducer(NoteReducer, INITIAL_STATE, () => {
        return localData ? JSON.parse(localData) : localStorage.setItem('notes', JSON.stringify(INITIAL_STATE))
    });

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notestate))
    }, [notestate])

    const toggleNote = (id: number) => {
        dispatch({ type: 'toggleInteresting', payload: { id } })
    }

    const addNote = (note: Note) => {
        dispatch({ type: 'addNote', payload: note })
    }

    const changeState = (active: string) => {
        dispatch({ type: 'changeState', payload: active })
    }

    const handleDeleteNote = (id: number) => {
        dispatch({ type: 'deleteNote', payload: { id } })
    }

    return (
        <NotesContext.Provider value={{ toggleNote, addNote, changeState, handleDeleteNote, notestate }}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesProvider;