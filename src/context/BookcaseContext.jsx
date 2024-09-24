// use until integrated with backend
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  books: JSON.parse(localStorage.getItem('bookcaseBooks')) || [],
};

const bookcaseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': {
      const currentBooks =
        JSON.parse(localStorage.getItem('bookcaseBooks')) || [];
      const bookExists = currentBooks.some(
        (book) => book.id === action.payload.id
      );

      if (bookExists) {
        return { ...state };
      }

      return {
        ...state,
        books: [...state.books, action.payload],
      };
    }

    case 'REMOVE_BOOK': {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

const BookcaseContext = createContext();

export const BookcaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookcaseReducer, initialState);

  useEffect(() => {
    localStorage.setItem('bookcaseBooks', JSON.stringify(state.books));
  }, [state.books]);

  return (
    <BookcaseContext.Provider value={{ state, dispatch }}>
      {children}
    </BookcaseContext.Provider>
  );
};

export const useBookcase = () => {
  return React.useContext(BookcaseContext);
};
