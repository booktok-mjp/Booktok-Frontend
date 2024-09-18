import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { GiBookPile } from 'react-icons/gi';
import NullBook from '../book/NullBook';
import { useNavigate } from 'react-router-dom';
import useDeviceType from '../../../hooks/useDeviceType';
import './CustomCard.css';
import { Colors } from '../../../config';

const CustomCard = ({ book }) => {
  const navigate = useNavigate();
  const deviceType = useDeviceType();
  const showBiggerCard = deviceType === 'mobile' || deviceType === 'tablet';

  const handleNavigate = () => {
    navigate(`/book/${book.title}/${book.id}`);
  };

  const shortenedDescription = (description) => {
    if (description.length > 60) return description.substring(0, 70) + '...';
    return description;
  };

  return (
    <Card bg="light" border="dark" className="mb-5 custom-card">
      <div className="custom-card-img-container">
        {book.imgUrl ? (
          <Card.Img
            variant="top"
            src={book.imgUrl}
            onClick={handleNavigate}
            className="custom-card-img"
          />
        ) : (
          <NullBook />
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {shortenedDescription(book.description)}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush bg-body-tertiary">
        {book.authors.map((author) => (
          <ListGroup.Item key={book.id + author.name}>
            {author.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body className="text-center">
        <Card.Text>Add to TBR</Card.Text>
        <GiBookPile fontSize="30pt" color={Colors.forestGreen} />
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
