import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from './providers/modal-provider';
import { Toaster } from 'sonner';

import AdminManageEvents from './components/admin/AdminManageEvents';
import AdminManageResources from './components/admin/AdminManageResources';
import AdminUserManagment from './components/admin/AdminUserManagment';
import Footer from './components/Footer';
import MainDashboard from './components/admin/MainDashboard';
import MyProfileDashboard from './components/profile/MyProfileDashboard';
import MyResources from './components/profile/MyResources';
import Navbar from './components/Navbar';
import VerifyEmailPage from './components/VerifyEmailPage';

import { FAQ } from './pages/FAQ';
import { RecursosEducativos } from './pages/RecursosEducativos';
import AdminPanelPage from './pages/AdminPanelPage';
import Colaboradores from './pages/Colaboradores';
import ComoColaborar from './pages/ComoColaborar';
import ContactPage from './pages/ContactPage';
import ErasmusCofinanciado from './pages/ErasmusCofinanciadoPage';
import HomePage from './pages/HomePage';
import Objetivos from './pages/Objetivos';
import Patrocinadores from './pages/Patrocinadores';

import ProfilePanelPage from './pages/ProfilePanelPage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import QuieroColaborarPage from './pages/QuieroColaborarPage';
import TermsAndConditions from './pages/TermsAndConditions';
import ProgramaEventos from './pages/ProgramaEventos';

import FRREEPage from './pages/FRREEPage';
import CreateEvent from './components/admin/CreateEvent';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <ModalProvider />
        <Toaster
          position='bottom-right'
          richColors
        />
        <section className='min-h-[calc(100vh-340px)]'>
          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/colaborar-form'
              element={<QuieroColaborarPage />}
            />
            <Route
              path='/terms-and-conditions'
              element={<TermsAndConditions />}
            />
            <Route
              path='/como-colaborar'
              element={<ComoColaborar />}
            />
            <Route
              path='/colaboradores'
              element={<Colaboradores />}
            />
            <Route
              path='/FRREE'
              element={<FRREEPage />}
            />
            <Route
              path='/contact'
              element={<ContactPage />}
            />
            <Route
              path='/recursos-educativos'
              element={<RecursosEducativos />}
            />
            <Route
              path='/programa-eventos'
              element={<ProgramaEventos />}
            />
            <Route
              path='/faq'
              element={<FAQ />}
            />
            <Route
              path='/patrocinadores'
              element={<Patrocinadores />}
            />
            <Route
              path='/objetivos'
              element={<Objetivos />}
            />
            <Route
              path='/erasmus-cofinanciado'
              element={<ErasmusCofinanciado />}
            />
            <Route
              path='/about'
              element={<QuienesSomosPage />}
            />
            <Route
              path='/verify/:token'
              element={<VerifyEmailPage />}
            />
            <Route
              path='/profile-panel'
              element={<ProfilePanelPage />}>
              <Route
                index
                element={<MyProfileDashboard />}
              />
              <Route
                path='my-recources'
                element={<MyResources />}
              />
            </Route>{' '}
            <Route
              path='/admin-panel'
              element={<AdminPanelPage />}>
              <Route
                index
                element={<MainDashboard />}
              />
              <Route
                path='create-event'
                element={<CreateEvent />}
              />
              <Route
                path='all-users'
                element={<AdminUserManagment />}
              />
              <Route
                path='admin-all-resources'
                element={<AdminManageResources />}
              />
              <Route
                path='all-events'
                element={<AdminManageEvents />}
              />
            </Route>
          </Routes>
        </section>
        <Footer />
      </UserProvider>{' '}
    </Router>
  );
}

export default App;
