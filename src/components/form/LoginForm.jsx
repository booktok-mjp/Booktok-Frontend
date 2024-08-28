import { useState } from 'react';

import AppHeader from '../header/AppHeader';
import { loginUser } from '../../services/userService';
import { useUser } from '../../context/UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ email, password });
      console.log('user: ', user);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      }
    } catch (error) {
      console.error('error logging in', error);
    }
  };

  return (
    <div>
      <AppHeader text="BookTok" size="40px" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          alt="email-input"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <label htmlFor="password">Password: </label>
        <input
          alt="password-input"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <button type="submit">Log in...</button>
      </form>
    </div>
  );
};

export default LoginForm;
