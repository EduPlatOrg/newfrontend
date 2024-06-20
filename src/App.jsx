import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import { ModalProvider } from './providers/modal-provider';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <ModalProvider />
        <Toaster
          position='top-right'
          richColors
        />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
        </Routes>
      </UserProvider>{' '}
    </Router>
  );
}

export default App;
