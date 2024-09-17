import LogoutBtn from '../../components/common/button/logout/LogoutBtn';
import CustomCard from '../../components/common/card/CustomCard';
import CustomGrid from '../../components/common/grid/CustomGrid';
import Navbar from '../../components/navbar/NavBar';
import { useUser } from '../../context/UserContext';
import useAllBooks from '../../hooks/useAllBooks';
import useSingleBook from '../../hooks/useSingleBook';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { books } from '../../data/books';

const HomeView = () => {
  const { setUser } = useUser();
  // const { book, loading, error } = useSingleBook(2);
  // const { books, loading, error } = useAllBooks();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const customBookCards = books.map((book) => (
    <CustomCard key={book.id} book={book} />
  ));

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // width: '80%',
          height: '80%',
        }}
      >
        <CustomGrid items={customBookCards} />
      </div>
    </div>
  );
};

export default HomeView;
