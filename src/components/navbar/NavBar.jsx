import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  BsFillBookFill,
  BsFillHousesFill,
  BsCollectionFill,
  BsChatTextFill,
} from 'react-icons/bs';

import LogoutBtn from '../common/button/logout/LogoutBtn';
import CustomIcon from '../icon/CustomIcon';
import CustomHeader from '../header/CustomHeader';
import CustomModal from '../modal/CustomModal';
import ReactIcon from '../icon/ReactIcon';

import { Colors, Constants } from '../../config';
import logo from '../../assets/images/bookflower.png';
import bookLogo from '../../assets/images/bookflower.png';
import './NavBar.css';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-5 custom-navbar sticky-top d-flex align-items-center"
      >
        <Container fluid className="d-flex justify-content-between">
          <Navbar.Brand
            className="pacifico-regular fs-1 d-flex align-items-center"
            href="/"
          >
            <CustomIcon imgUrl={bookLogo} />
            <CustomHeader
              fontSize="36pt"
              text={Constants.name}
              color={Colors.cream}
              pacifico
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end d-none d-lg-flex"
          >
            <Nav className="align-items-center">
              <Nav.Link className="navbar-link" href="/">
                <BsFillHousesFill className="navbar-icon" fontSize={30} />
                Home
              </Nav.Link>
              <Nav.Link disabled className="navbar-link" href="/discover">
                <BsFillBookFill className="navbar-icon" fontSize={30} />
                Discover
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/mybookcase">
                <BsCollectionFill className="navbar-icon" fontSize={30} />
                My Bookcase
              </Nav.Link>
              <Nav.Link className="navbar-link" href="/discussions">
                <BsChatTextFill className="navbar-icon" fontSize={30} />
                My Discussions
              </Nav.Link>
              <ReactIcon iconName="profileIcon" onClick={handleShow} />
            </Nav>
          </Navbar.Collapse>

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="top"
            className="d-lg-none h-auto"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="pacifico-regular fs-1"
                id="offcanvasNavbarLabel-expand"
              >
                Book Tok
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-content">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="navbar-link" href="/">
                    <BsFillHousesFill className="navbar-icon" fontSize={30} />
                    Home
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/discover">
                    <BsFillBookFill className="navbar-icon" fontSize={30} />
                    Discover
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/mybookcase">
                    <BsCollectionFill className="navbar-icon" fontSize={30} />
                    My Bookcase
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/mydiscussions">
                    <BsChatTextFill className="navbar-icon" fontSize={30} />
                    My Discussions
                  </Nav.Link>
                </Nav>
                <div className="offcanvas-logout">
                  <LogoutBtn />
                </div>
              </div>
              <div className="offcanvas-footer text-center">
                <img
                  src={logo}
                  className="offcanvas-logo"
                  alt="Book Tok Logo"
                />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <CustomModal
          modalTitle={<CustomHeader text="Profile Settings" />}
          handleClose={handleClose}
          show={show}
        />
      </Navbar>
    </>
  );
};

export default CustomNavbar;
