import { useEffect, useState } from 'react';
import { getBookById } from '../services/bookService';

const useSingleBook = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const book = await getBookById(id);
        setBook(book);
        console.log('single book', book.title);

        setLoading(false);
      } catch (error) {
        console.error('error fetching book', error);
        setError(error.message);
      }
    };
    fetchBook();
  }, [id]);

  return { book, loading, error };
};

export default useSingleBook;
