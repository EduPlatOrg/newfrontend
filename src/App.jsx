import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import { ModalProvider } from './providers/modal-provider';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';
import TermsAndConditions from './pages/TermsAndConditions';
import Footer from './components/Footer';
import ComoColaborar from './pages/ComoColaborar';

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
        <body className='min-h-[calc(100vh-220px)]'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/terms-and-conditions'
              element={<TermsAndConditions />}
            />
            <Route
              path='/como-colaborar'
              element={<ComoColaborar />}
            />
          </Routes>
        </body>
        <Footer />
      </UserProvider>{' '}
    </Router>
  );
}

export default App;
