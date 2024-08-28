import AppHeader from '../components/header/AppHeader';
import LoginForm from '../components/form/LoginForm';
import AppImage from '../components/common/image/AppImage';

import logo from '../assets/images/bookflower.png';

const LandingView = () => {
  return (
    <div>
      <AppHeader text="Book Tok" size="30pt" />
      <AppImage imgUrl={logo} size="large" />
      <LoginForm />
    </div>
  );
};

export default LandingView;
