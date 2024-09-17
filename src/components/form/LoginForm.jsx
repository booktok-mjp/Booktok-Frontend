import { useState } from 'react';
import Form from 'react-bootstrap/Form';

import { loginUser } from '../../services/userService';
import { useUser } from '../../context/UserContext';
import CustomButton from '../common/button/CustomButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoginForm, setIsLoginForm] = useState(false);
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ email, password });
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
      }
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label style={{ color: 'var(--paynes-gray)' }}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <CustomButton
          text="Log In"
          handlerFunction={handleSubmit}
          variant="outline-secondary"
        />
      </Form>
    </div>
  );
};

export default LoginForm;
