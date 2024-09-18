import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from 'react-icons/bs';

import CustomHeader from '../../header/CustomHeader';
import { Colors, Constants } from '../../../config';

import './BookcaseCard.css';
import { GiBookPile } from 'react-icons/gi';

const BookcaseCard = () => {
  return (
    <div className="bookcase-card-container">
      <div className="header">
        <span className="mx-2">
          <GiBookPile fontSize="30pt" color={Colors.forestGreen} />
        </span>
        <CustomHeader
          fontSize="24pt"
          text={Constants.myBookcase}
          color={Colors.ivory}
        />
      </div>
      <ListGroup as="ol" className="p-3">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mb-2"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">A Game of Thrones</div>
            George R.R. Martin
          </div>
          <BsFillTrashFill color={Colors.wineRed} fontSize="16pt" />
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mb-2"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">1984</div>
            George Orwell
          </div>
          <BsFillTrashFill color={Colors.wineRed} fontSize="16pt" />
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mb-2"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Fire & Blood</div>
            George R.R. Martin
          </div>
          <BsFillTrashFill color={Colors.wineRed} fontSize="16pt" />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default BookcaseCard;
