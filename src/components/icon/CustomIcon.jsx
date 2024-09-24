import React from 'react';
import './CustomIcon.css';
import { Colors } from '../../config';

const CustomIcon = ({ imgUrl, size = 50, bgColor = Colors.wineRed }) => {
  return (
    <div
      className="icon-container"
      style={{ backgroundColor: bgColor, width: size, height: size }}
    >
      <img className="icon-img" src={imgUrl} alt="custom-icon" />
    </div>
  );
};

export default CustomIcon;
