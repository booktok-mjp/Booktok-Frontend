import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ text, handlerFunction, variant }) => {
  return (
    <div className="d-grid gap-2 mt-3">
      <Button
        style={{
          color: 'var(--cream)',
          backgroundColor: 'var(--wine-red)',
          border: 'var(--wine-red)',
        }}
        // variant={variant}
        className="custom-btn"
        onClick={handlerFunction}
        type="submit"
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
