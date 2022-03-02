export interface Note {
    id: number;
    description: string;
    title: string;
    interesting: boolean;
    created: string;
}

export interface NoteState {
    notesCount: number;
    notes: Note[];
    active: any;
}
