import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../../data/books';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

import './SingleBookView.css';

const SingleBookView = () => {
  const { bookId } = useParams();
  const singleBook = books.find((book) => book.id == bookId);

  return (
    <Container className="single-book-view">
      {singleBook && (
        <>
          <Row className="d-flex align-items-center mb-5">
            {/* Book Image */}
            <Col md={3} className="d-flex justify-content-center">
              <Card className="shadow-lg">
                <Card.Img src={singleBook.imgUrl} alt={singleBook.title} />
              </Card>
            </Col>

            {/* Book Details */}
            <Col md={7}>
              <h1 className="book-title mb-3 p-2">{singleBook.title}</h1>
              <h5 className="authors-header">Authors:</h5>
              <Row>
                {singleBook.authors.map((author) => (
                  <Col
                    key={author.id}
                    xs={12}
                    md={6}
                    className="mb-4 d-flex align-items-center"
                  >
                    <Image
                      src={author.imgUrl}
                      roundedCircle
                      className="author-img me-3"
                      alt={author.name}
                    />
                    <p className="author-name mb-0">{author.name}</p>
                  </Col>
                ))}
              </Row>
              <Card.Body>
                <Card.Text>{singleBook.extendedDescription}</Card.Text>
                <Button variant="primary" className="mt-3">
                  Add to Bookcase
                </Button>
              </Card.Body>
            </Col>
          </Row>

          {/* Related Books Section */}
          <Row className="related-books-section mt-5">
            <h2 className="related-books-title mb-4">Related Books</h2>
            <Row>
              {books
                .filter((book) => book.id !== singleBook.id)
                .slice(0, 4)
                .map((relatedBook) => (
                  <Col
                    key={relatedBook.id}
                    xs={12}
                    sm={6}
                    md={3}
                    className="mb-4"
                  >
                    <Card className="related-book-card shadow-sm">
                      <Card.Img
                        variant="top"
                        src={relatedBook.imgUrl}
                        alt={relatedBook.title}
                      />
                      <Card.Body>
                        <Card.Title>{relatedBook.title}</Card.Title>
                        <Button variant="outline-primary" size="sm">
                          View Details
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Row>
        </>
      )}
    </Container>
  );
};

export default SingleBookView;
