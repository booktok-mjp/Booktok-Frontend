import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoutBtn from '../common/button/logout/LogoutBtn';
import {
  BsFillBookFill,
  BsFillHousesFill,
  BsCollectionFill,
  BsChatTextFill,
} from 'react-icons/bs';
import logo from '../../assets/images/bookflower.png';
import './NavBar.css';

const CustomNavbar = () => {
  return (
    <>
      <Navbar
        variant="dark"
        expand={false}
        className="mb-5"
        style={{ height: '100px', backgroundColor: 'var(--navy-blue)' }}
      >
        <Container fluid>
          <Navbar.Brand
            className="source-sans-3-bold text-uppercase fs-2"
            href="#"
          >
            Book Tok
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find a book!"
              className="me-2"
              aria-label="Search"
              size="md"
            />
            <Button variant="outline-light" className="source-sans-3-regular">
              Search
            </Button>
          </Form>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${1}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${1}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${1}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                className="source-sans-3-bold text-uppercase fs-2"
                id={`offcanvasNavbarLabel-expand-${1}`}
              >
                Book Tok
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="offcanvas-content">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="navbar-link" href="#action1">
                    <BsFillHousesFill className="navbar-icon" fontSize={30} />
                    Home
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="#action1">
                    <BsFillBookFill className="navbar-icon" fontSize={30} />
                    Discover
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="#action2">
                    <BsCollectionFill className="navbar-icon" fontSize={30} />
                    My Bookcase
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="#action2">
                    <BsChatTextFill className="navbar-icon" fontSize={30} />
                    My Discussions
                  </Nav.Link>
                </Nav>
                <LogoutBtn />
              </div>
              <div className="offcanvas-footer">
                <img src={logo} width="90%" alt="Book Tok Logo" />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
