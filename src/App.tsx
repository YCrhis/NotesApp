import './App.css';
import { AddNote } from './components/AddNote/AddNote';
import { Banner } from './components/Banner/Banner';

import { NoteList } from './Notes/components/NoteList';
import NotesProvider from './Notes/context/NotesProvider';

import { Content } from './components/layouts/Content'
import { Subheader } from './components/header/Subheader';
import { ModalProvider } from './Modal/context/ModalProvider';


function App() {
  return (
    <NotesProvider>
      <ModalProvider>
        <Content>
          <Banner />
          <Subheader />
          <NoteList />
        </Content>
      </ModalProvider>
    </NotesProvider>
  );
}

export default App;
