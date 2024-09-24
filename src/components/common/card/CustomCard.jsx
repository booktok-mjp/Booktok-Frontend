import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import NullBook from '../book/NullBook';
import AddBookButton from '../button/addBook/AddBookButton';
import { useBookcase } from '../../../context/BookcaseContext';

import './CustomCard.css';

const CustomCard = ({ book, showAddBtn = true }) => {
  const navigate = useNavigate();
  const { dispatch } = useBookcase();

  const handleNavigate = () => {
    navigate(`/book/${book.id}`);
  };

  const handleAddToBookcase = () => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };

  const handleSetReadingNow = (bookId) => {
    dispatch({ type: 'SET_READING_NOW', payload: bookId });
  };

  return (
    <Card bg="light" border="dark" className="mb-5 custom-card">
      <div className="custom-card-img-container">
        {book.imgUrl ? (
          <Card.Img
            variant="top"
            src={book.imgUrl}
            onClick={handleNavigate}
            className="custom-card-img"
          />
        ) : (
          <NullBook />
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {book.description.substring(0, 60)}...
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush bg-body-tertiary">
        <ListGroup.Item>{book.authors[0].name}</ListGroup.Item>
      </ListGroup>
      {showAddBtn ? (
        <Card.Body className="text-center align-items-end">
          <AddBookButton onClick={handleAddToBookcase} />
        </Card.Body>
      ) : (
        <Card.Body className="text-center align-items-end">
          <Button
            className="d-block"
            variant="success"
            onClick={() => handleSetReadingNow(book.id)}
          >
            Set as Reading Now
          </Button>
        </Card.Body>
      )}
    </Card>
  );
};

export default CustomCard;
