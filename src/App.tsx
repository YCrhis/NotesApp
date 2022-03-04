import './App.css';
import { AppContent } from './components/layouts/App';
import { UserProvider } from './user/context/UserProvider';


function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
