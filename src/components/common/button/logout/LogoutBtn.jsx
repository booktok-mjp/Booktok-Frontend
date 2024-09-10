import React from 'react';
import Button from 'react-bootstrap/Button';

import { useUser } from '../../../../context/UserContext';
import './LogoutBtn.css';

const LogoutBtn = () => {
  const { setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="d-grid gap-2 mt-4">
      <Button
        variant="outline-secondary"
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutBtn;
