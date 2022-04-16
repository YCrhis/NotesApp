import { Note, NoteState } from "../interfaces/interfaces";

type NoteActions =
    | { type: 'addNote', payload: Note }
    | { type: 'toggleInteresting', payload: { id: number } }
    | { type: 'changeState', payload: string }
    | { type: 'deleteNote', payload: { id: number } }

export const NoteReducer = (state: NoteState, action: NoteActions): NoteState => {

    switch (action.type) {
        case 'addNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case 'toggleInteresting':
            return {
                ...state,
                notes: state.notes.map(({ ...note }) => {
                    if (note.id === action.payload.id) {
                        note.interesting = !note.interesting;
                    }

                    return note
                })
            }
        case 'changeState':
            return {
                ...state,
                types: action.payload
            }
        case 'deleteNote':
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id)
            }
        default:
            return state;
    }
}