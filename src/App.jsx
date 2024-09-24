import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingView from './views/landing/LandingView';
import HomeView from './views/home/HomeView';
import CustomNavbar from './components/navbar/NavBar';
import BookcaseView from './views/bookcase/BookcaseView';
import SingleBookView from './views/single-book/SingleBookView';
import DiscussionView from './views/discussion/DiscussionView';
import DiscussionsOverview from './views/discussion/DiscussionsOverview';

import { useUser } from './context/UserContext';

const App = () => {
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
            <Route path="/book/:bookId" element={<SingleBookView />} />
            <Route path="/discussions" element={<DiscussionsOverview />} />
            <Route path="/discussion/:bookId" element={<DiscussionView />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingView />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
