import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const CustomToast = ({ alt, imgUrl, title, body, time, variant = 'light' }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer
        position="bottom-start"
        className="p-3"
        style={{ zIndex: 1 }}
      >
        <Toast
          bg={variant}
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <img src={imgUrl} className="rounded me-2" alt={alt} />
            <strong className="me-auto">{title}</strong>
            {time && <small className="text-muted">{time}</small>}
          </Toast.Header>
          <Toast.Body>{body}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default CustomToast;
