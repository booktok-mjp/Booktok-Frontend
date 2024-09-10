import React from 'react';
import Card from 'react-bootstrap/Card';

import logo from '../../../assets/images/bookflower.png';
import './NullBook.css';

const NullBook = () => {
  return <Card.Img className="null-book-container" variant="top" src={logo}  />;
};

export default NullBook;
