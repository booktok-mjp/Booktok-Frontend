import { useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../../components/form/LoginForm';
import SignupForm from '../../components/form/SignupForm';
import './LandingView.css';
import logo from '../../assets/images/booktokred.png';
import book from '../../assets/images/bookflower.png';
import AppImage from '../../components/common/image/AppImage';
import CustomButton from '../../components/common/button/CustomButton';

const LandingView = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <Container fluid className="landing-container">
        <Row className="justify-content-center">
          <Col>
            <AppImage imgUrl={book} size="large" />
          </Col>
          <Col className="text-start">
            <Card
              className="mt-4 p-5 form-card"
              style={{ backgroundColor: 'var(--cream)' }}
            >
              <AppImage imgUrl={logo} size="wide" />
              {isLogin ? <LoginForm /> : <SignupForm />}
              <Button
                onClick={toggleForm}
                variant="link"
                className="link-dark link-underline-secondary mt-2"
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : 'Already have an account? Log In'}
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingView;
