import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import { ModalProvider } from './providers/modal-provider';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';
import TermsAndConditions from './pages/TermsAndConditions';
import Footer from './components/Footer';

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
          <Route
            path='/terms-and-conditions'
            element={<TermsAndConditions />}
          />
        </Routes>
        <Footer />
      </UserProvider>{' '}
    </Router>
  );
}

export default App;
