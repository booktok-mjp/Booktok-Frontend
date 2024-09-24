import React, { useState } from 'react';
import { Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import { GiSpellBook } from 'react-icons/gi';

import book from '../../assets/images/books.png';
import CustomIcon from '../icon/CustomIcon';
import { Colors, Constants } from '../../config';
import CustomHeader from '../header/CustomHeader';

const RecommendationCard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Card
      className="recommendation-card mt-3 shadow-sm"
      style={{ backgroundColor: Colors.ivory }}
    >
      <Card.Body>
        <Card.Title className="d-flex align-items-center mb-2">
          <span className="mx-2">
            <GiSpellBook color={Colors.brunswickGreen} fontSize="26pt" />
          </span>
          <CustomHeader
            color={Colors.darkSlateGray}
            fontSize="16pt"
            text={Constants.recommendations}
          />
        </Card.Title>
        <Carousel
          indicators={false}
          activeIndex={index}
          onSelect={handleSelect}
          variant="dark"
          className="px-5"
        >
          <Carousel.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <CustomIcon imgUrl={book} />
              <span>Book Title</span>
            </ListGroup.Item>
          </Carousel.Item>
          <Carousel.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <CustomIcon imgUrl={book} />
              <span>Book Title</span>
            </ListGroup.Item>
          </Carousel.Item>
          <Carousel.Item>
            <ListGroup.Item className="d-flex align-items-center">
              <CustomIcon imgUrl={book} />
              <span>Book Title</span>
            </ListGroup.Item>
          </Carousel.Item>
        </Carousel>
        <Button variant="link" style={{ color: Colors.beaver2 }}>
          See more recommendations
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecommendationCard;
