import React from 'react';
import Card from 'react-bootstrap/Card';
import { BsFillTrashFill } from 'react-icons/bs';
import { GiBookshelf } from 'react-icons/gi';
import ListGroup from 'react-bootstrap/ListGroup';

import { useBookcase } from '../../../context/BookcaseContext';
import bookImg from '../../../assets/images/books.png';
import CustomHeader from '../../header/CustomHeader';
import './QuickcaseCard.css';
import { Colors, Constants } from '../../../config';

const QuickcaseCard = () => {
  const { state, dispatch } = useBookcase();

  const handleRemoveBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };

  return (
    <Card className="quickcase-card-container shadow-sm">
      <Card.Img variant="top" src={bookImg} className="quickcase-img" />
      <Card.Body className="quickcase-body">
        <div className="d-flex align-items-center">
          <span className="mx-2">
            <GiBookshelf fontSize="30pt" color={Colors.brunswickGreen} />
          </span>
          <CustomHeader
            text={Constants.myQuickcase}
            fontSize="28pt"
            color={Colors.brunswickGreen}
          />
        </div>

        <ListGroup as="ol" className="p-3">
          {state.books.length === 0 ? (
            <p>No books in the bookcase yet.</p>
          ) : (
            state.books.map((book) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-2 quickcase-book"
                key={book.id}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold quickcase-book-title">
                    {book.title}
                  </div>
                  <span className="quickcase-book-author">
                    {book.authors.map((author) => author.name).join(', ')}
                  </span>
                </div>
                <BsFillTrashFill
                  className="quickcase-remove-icon"
                  onClick={() => handleRemoveBook(book.id)}
                  style={{ cursor: 'pointer' }}
                />
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default QuickcaseCard;
