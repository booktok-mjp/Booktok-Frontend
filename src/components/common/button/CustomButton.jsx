import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({
  backgroundColor,
  borderColor,
  color,
  handlerFunction,
  text,
}) => {
  // fix hover
  return (
    <div className="d-grid gap-2 mt-3 custom-btn">
      <Button
        className="custom-btn"
        onClick={handlerFunction}
        style={{ color, backgroundColor, borderColor }}
        type="submit"
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
