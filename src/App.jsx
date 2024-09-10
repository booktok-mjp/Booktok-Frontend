import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUser } from './context/UserContext';
import LandingView from './views/LandingView';
import HomeView from './views/HomeView';
import './App.css';

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {user ? (
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LandingView />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
