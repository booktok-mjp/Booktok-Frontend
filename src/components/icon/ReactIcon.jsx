import React from 'react';
import { BsPersonFillGear } from 'react-icons/bs';
import { BiSolidBookAdd } from 'react-icons/bi';

import { Colors } from '../../config';

import './ReactIcon.css';

const iconMap = {
  profileIcon: <BsPersonFillGear fontSize="26pt" color={Colors.wineRed} />,
  addBook: <BiSolidBookAdd fontSize="26pt" color={Colors.wineRed} />,
};

const ReactIcon = ({ iconName, onClick }) => {
  return (
    <div className="icon-container-react" onClick={onClick}>
      {iconMap[iconName]}
    </div>
  );
};

export default ReactIcon;
