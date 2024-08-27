import './App.css';
import useAllBooks from './hooks/useAllBooks';
import useSingleBook from './hooks/useSingleBook';

function App() {
  const { books, loading, error } = useAllBooks();
  const {
    book: currentBook,
    loading: bookLoading,
    error: bookError,
  } = useSingleBook(1);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {books &&
        books.length > 0 &&
        books.map((book) => (
          <div key={book.id}>
            <p>{book.title}</p>

            {book.authors.map((author) => (
              <p key={author.id}>{author.name}</p>
            ))}
          </div>
        ))}
      {currentBook && (
        <>
          <p>current book: </p>
          <p>{currentBook.title}</p>
        </>
      )}
    </>
  );
}

export default App;
