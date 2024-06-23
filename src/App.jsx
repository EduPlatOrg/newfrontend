import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import { ModalProvider } from './providers/modal-provider';
import Navbar from './components/Navbar';
import { Toaster } from 'sonner';
import TermsAndConditions from './pages/TermsAndConditions';
import Footer from './components/Footer';
import ComoColaborar from './pages/ComoColaborar';
import VerifyEmailPage from './components/VerifyEmailPage';
import ProfilePanelPage from './pages/ProfilePanelPage';
import MyProfileDashboard from './components/profile/MyProfileDashboard';
import MyResources from './components/profile/MyResources';
import MainDashboard from './components/admin/MainDashboard';
import AdminPanelPage from './pages/AdminPanelPage';
import AdminUserManagment from './components/admin/AdminUserManagment';
import AdminManageResources from './components/admin/AdminManageResources';
import AdminManageEvents from './components/admin/AdminManageEvents';

import { RecursosEducativos } from './pages/RecursosEducativos';

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
        <section className='min-h-[calc(100vh-220px)]'>
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
            <Route
              path='/recursos-educativos'
              element={<RecursosEducativos />}
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
