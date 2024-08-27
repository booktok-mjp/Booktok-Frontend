import { Route, Routes } from 'react-router-dom';
import LandingView from './views/LandingView';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />} />
      </Routes>
    </>
  );
}

export default App;
