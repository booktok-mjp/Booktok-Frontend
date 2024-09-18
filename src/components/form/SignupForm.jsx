import { useState } from 'react';
import { Form } from 'react-bootstrap';

import CustomButton from '../common/button/CustomButton';
import { Colors } from '../../config';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign up:', { name, email, password });
  };

  return (
    <div className="signup-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-4">
          <Form.Label className="form-label">Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-4">
          <Form.Label className="form-label">Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-4">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </Form.Group>

        <CustomButton
          text="Sign Up"
          handlerFunction={handleSubmit}
          color={Colors.cream}
          backgroundColor={Colors.wineRed}
          borderColor={Colors.wineRed}
        />
      </Form>
    </div>
  );
};

export default SignupForm;
