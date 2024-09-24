import React from 'react';
import CustomCard from '../../components/common/card/CustomCard';
import CustomGrid from '../../components/common/grid/CustomGrid';
import SearchBar from '../../components/form/search/SearchBar';
import Divider from '../../components/divider/Divider';
import { books as libraryBooks } from '../../data/books';
import { useBookcase } from '../../context/BookcaseContext';
import QuickcaseCard from '../../components/bookcase/card/QuickcaseCard';
import RecommendationCard from '../../components/recommendation/RecommendationCard';

const HomeView = () => {
  const { dispatch } = useBookcase();

  const handleAddBook = (book) => {
    dispatch({ type: 'ADD_BOOK', payload: book });
  };

  const customBookCards = libraryBooks.map((book) => (
    <CustomCard
      key={book.id}
      book={book}
      onAddToBookcase={() => handleAddBook(book)}
    />
  ));

  return (
    <div>
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          style={{ position: 'sticky', top: '150px', alignSelf: 'flex-start' }}
        >
          <QuickcaseCard />
          <RecommendationCard />
        </div>
        <div style={{ position: 'sticky', top: '100px', height: '600px' }}>
          <Divider orientation="vertical" height="700px" />
        </div>
        <CustomGrid items={customBookCards} />
      </div>
    </div>
  );
};

export default HomeView;
