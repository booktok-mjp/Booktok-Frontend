import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUser } from './context/UserContext';
import LandingView from './views/home/LandingView';
import HomeView from './views/home/HomeView';
import CustomNavbar from './components/navbar/NavBar';
import BookcaseView from './views/bookcase/BookcaseView';

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, [setUser]);

  return (
    <div style={{ backgroundColor: 'var(--cream)' }}>
      {user ? (
        <>
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/mybookcase" element={<BookcaseView />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingView />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
