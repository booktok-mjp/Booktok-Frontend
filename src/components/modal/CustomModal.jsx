// use as form for now, make reusable
import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import LogoutBtn from '../common/button/logout/LogoutBtn';
import CustomButton from '../common/button/CustomButton';
import { useUser } from '../../context/UserContext';
import { Colors } from '../../config';

const CustomModal = ({ modalTitle, handleClose, show }) => {
  const { user } = useUser();

  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('updating profile...');
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user && (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </Form.Group>

            <CustomButton
              text="Save Changes"
              backgroundColor={Colors.wineRed}
              borderColor={Colors.battleshipGray}
              handlerFunction={handleSubmit}
            />
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer className="d-block">
        <LogoutBtn />
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
