import './Header.css';
import {
  Nav, Navbar, Container, Form, FormControl, Button,
} from 'react-bootstrap';

const Header = () => (
  <div>
    <Navbar className="p-0 stciky-top">
      <Container fluid>
        <div className="d-flex">
          <Navbar.Brand href="#" className="text-white">Covid-19 Response</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >

              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Search by continent"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="success" className="text-white">Search</Button>
              </Form>
              <Nav.Link href="#action1" className="text-white home">Home</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>

    </Navbar>
  </div>

);
export default Header;
