import React from 'react';
import ReactIcon from '../../../icon/ReactIcon';
import './AddBookButton.css';

const AddBookButton = ({ onClick }) => {
  return (
    <div className="add-book-btn-container d-flex align-items-center justify-content-around">
      Add to Bookcase <ReactIcon iconName="addBook" onClick={onClick} />
    </div>
  );
};

export default AddBookButton;
