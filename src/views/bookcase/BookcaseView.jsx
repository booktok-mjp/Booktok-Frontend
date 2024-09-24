import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { useBookcase } from '../../context/BookcaseContext';
import CustomHeader from '../../components/header/CustomHeader';
import CustomCard from '../../components/common/card/CustomCard';

import './BookcaseView.css';

const BookcaseView = () => {
  const { state } = useBookcase();
  const { books, readingNow } = state;

  const readingNowBook = books.find((book) => book.id === readingNow);

  return (
    <Container className="bookcase-view-container">
      <div className="text-center mb-4">
        <CustomHeader text="My Bookcase" pacifico fontSize="40pt" />
      </div>

      <Row className="reading-now-section mb-4 p-3">
        <Col md={12}>
          <div className="mb-3">
            <CustomHeader text="Reading now.." pacifico fontSize="20pt" />
          </div>

          {readingNowBook ? (
            <Card className="reading-now-card shadow-sm">
              <Row>
                <Col md={4}>
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      src={readingNowBook.imgUrl}
                      alt={readingNowBook.title}
                      className="reading-now-image"
                    />
                  </div>
                </Col>
                <Col
                  md={8}
                  className="d-flex flex-column justify-content-center"
                >
                  <Card.Body>
                    <Card.Title>{readingNowBook.title}</Card.Title>
                    <Card.Text>{readingNowBook.extendedDescription}</Card.Text>
                    {readingNowBook.authors.map((author) => (
                      <Card.Text key={author.id}>{author.name}</Card.Text>
                    ))}
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ) : (
            <p>No book currently being read.</p>
          )}
        </Col>
      </Row>

      {/* Bookcase Display */}
      <Row>
        {books
          .filter((book) => book.id !== readingNow)
          .map((book) => (
            <Col md={4} lg={3} key={book.id} className="mb-4">
              <CustomCard book={book} showAddBtn={false} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookcaseView;
