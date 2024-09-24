import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillTrashFill } from 'react-icons/bs';
import CustomHeader from '../../header/CustomHeader';
import { Colors, Constants } from '../../../config';
import { useBookcase } from '../../../context/BookcaseContext';
import './BookcaseCard.css';
import { GiBookPile } from 'react-icons/gi';

const BookcaseCard = ({ forQuickcase }) => {
  const { state, dispatch } = useBookcase();

  const handleRemoveBook = (id) => {
    dispatch({ type: 'REMOVE_BOOK', payload: id });
  };

  return (
    <div className="bookcase-card-container">
      <div className="header">
        <span className="mx-2">
          <GiBookPile fontSize="30pt" color={Colors.forestGreen} />
        </span>
        <CustomHeader
          fontSize="24pt"
          text={Constants.myQuickcase}
          color={Colors.ivory}
        />
      </div>
      <ListGroup as="ol" className="p-3">
        {state.books.length === 0 ? (
          <p>No books in the bookcase yet.</p>
        ) : (
          state.books.map((book) => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mb-2"
              key={book.id}
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{book.title}</div>
                {book.authors.map((author) => author.name).join(', ')}
              </div>
              {forQuickcase && (
                <BsFillTrashFill
                  color={Colors.wineRed}
                  fontSize="16pt"
                  onClick={() => handleRemoveBook(book.id)}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
};

export default BookcaseCard;
