import './App.css';
import { AppContent } from './components/layouts/App';
import NotesProvider from './Notes/context/NotesProvider';
import { UserProvider } from './user/context/UserProvider';


function App() {
  return (
    <NotesProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </NotesProvider>
  );
}

export default App;
