import CustomCard from '../../components/common/card/CustomCard';
import CustomGrid from '../../components/common/grid/CustomGrid';
import SearchBar from '../../components/form/search/SearchBar';
import BookcaseCard from '../../components/bookcase/card/BookcaseCard';
import Divider from '../../components/divider/Divider';
import { books } from '../../data/books';

const HomeView = () => {
  const customBookCards = books.map((book) => (
    <CustomCard key={book.id} book={book} />
  ));

  return (
    <div>
      <SearchBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div
          style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}
        >
          <BookcaseCard />
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
