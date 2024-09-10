import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import NullBook from '../book/NullBook';
import { useNavigate } from 'react-router-dom';

const CustomCard = ({ book }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/book/${book.title}/${book.id}`);
  };

  const shortenedDescription = (description) => {
    if (description.length > 60) return description.substring(0, 60) + '...';
    return description;
  };
  return (
    <Card bg="light" border="dark" className="mb-5" style={{ width: '18rem' }}>
      {book.imgUrl ? (
        <Card.Img variant="top" src={book.imgUrl} onClick={handleNavigate} />
      ) : (
        <NullBook />
      )}

      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{shortenedDescription(book.description)}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush bg-body-tertiary">
        {book.authors.map((author) => (
          <ListGroup.Item bg key={book.id + author.name}>
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Details</Card.Link>
        <Card.Link href="#">Add to TBR</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
