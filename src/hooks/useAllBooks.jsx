import { useEffect, useState } from 'react';
import { getAllBooks } from '../services/bookService';

const useAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const books = await getAllBooks();
        setBooks(books);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };
    fetchBooks();
  }, []);

  return { books, loading, error };
};

export default useAllBooks;
