import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/UserContext.jsx';
import { BookcaseProvider } from './context/BookcaseContext.jsx';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BookcaseProvider>
          <App />
        </BookcaseProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
