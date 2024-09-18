import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LoginForm from '../../components/form/LoginForm';
import SignupForm from '../../components/form/SignupForm';
import './LandingView.css';
import logo from '../../assets/images/booktokred.png';
import CustomHeader from '../../components/header/CustomHeader';
import { Colors, Constants } from '../../config';

const LandingView = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="landing-page-container">
      <Card className="p-5 form-card" style={{ backgroundColor: Colors.cream }}>
        <div className="text-center">
          <img src={logo} alt="Book Tok Logo" style={{ width: '80%' }} />
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
        <Button
          onClick={toggleForm}
          variant="link"
          className="link-dark link-underline-secondary mt-2 link-offset-3-hover"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Log In'}
        </Button>
      </Card>
      <div className="text-center mt-5">
        <CustomHeader
          text={Constants.tagline2}
          fontSize="20pt"
          color={Colors.wineRed}
        />
      </div>
    </div>
  );
};

export default LandingView;
