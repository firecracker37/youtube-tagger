import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import DashboardPage from './screens/DashboardPage';
import HeaderNav from './components/HeaderNav';
import { auth } from './utils/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;
 
  return (
    <BrowserRouter>
      <HeaderNav />
      <main className="w-full min-h-screen bg-slate-900 text-white pt-10 px-4">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />
      </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App