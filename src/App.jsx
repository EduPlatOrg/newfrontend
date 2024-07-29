import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from './providers/modal-provider';
import { Toaster } from 'sonner';
import { ResourcesProvider } from './context/ResourcesContext';


import AdminUserManagment from './components/admin/AdminUserManagment';
import Footer from './components/Footer';
import MainDashboard from './components/admin/MainDashboard';
import MyProfileDashboard from './components/profile/MyProfileDashboard';
import MyResources from './components/profile/MyResources';
import Navbar from './components/Navbar';
import VerifyEmailPage from './components/VerifyEmailPage';

import { FAQ } from './pages/FAQ';
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
import CreateNewResource from './components/profile/CreateNewResource';
import EventsDetails from './components/EventsDetails';
import EventInscription from './components/EventInscription';
import RecursosEducativos2 from './pages/RecursosEducativos2';
import ResourceDetail from './components/ResourceDetail';
import PublicProfile from './pages/PublicProfile';


function App() {
  return (
    <Router>
      <UserProvider>
        <ResourcesProvider>
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
                path='/programa-eventos'
                element={<ProgramaEventos />}
              />
              <Route
                path='/programa-eventos/incripciones/:id'
                element={<EventInscription />}
              />
              <Route
                path='/programa-eventos/:id'
                element={<EventsDetails />}
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
                element={<RecursosEducativos2 />}
              />
              <Route
                path='/recursos-educativos/:id'
                element={<ResourceDetail />}
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
                path='/public-profile/:id'
                element={<PublicProfile />}
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
                  path='my-resources'
                  element={<MyResources />}
                />
                <Route
                  path='my-resources/new-resource'
                  element={<CreateNewResource />}
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
                  element={<RecursosEducativos2 />}
                />
              </Route>
            </Routes>
          </section>
          
          <Footer />
        </ResourcesProvider>
      </UserProvider>{' '}
    </Router>
  );
}

export default App;
