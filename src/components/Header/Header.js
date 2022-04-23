import './Header.css';
import PropTypes from 'prop-types';
import {
  Nav, Navbar, Container, Form, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Header = ({ setContinent }) => {
  const inputRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    setContinent(inputRef.current.value);
  };
  return (
    <div>
      <Navbar className="p-0" expand="lg">
        <Container fluid>

          <Navbar.Brand href="#" className="text-white">Covid-19 Response</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-center">
            <Nav
              className="my-2 my-lg-0"
            >

              <Form className="d-flex search-form me-5" onSubmit={handleSearch}>
                <input list="continent" placeholder="Type a continent name" ref={inputRef} />
                <datalist id="continent">
                  <option value="Africa" label="Africa" />
                  <option value="Asia" label="Asia" />
                  <option value="Europe" label="Europe" />
                  <option value="Australia-Oceania" label="Australia-Oceania" />
                  <option value="North America" label="North America" />
                  <option value="South America" label="South America" />
                </datalist>

                <Button variant="success" className="text-white" type="submit">Search</Button>
              </Form>
              <Link to="/"><Nav.Link href="#action1" className="text-white home">Home</Nav.Link></Link>

            </Nav>
          </Navbar.Collapse>

        </Container>

      </Navbar>
    </div>

  );
};
Header.propTypes = { setContinent: PropTypes.func.isRequired };

export default Header;
