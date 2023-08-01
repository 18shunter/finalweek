import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './components/Home';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';

function App() {
  const [dogs] = useState([
    {
      id: 1,
      name: 'Buddy',
      breed: 'Labrador',
      age: 2,
      description: 'Buddy is a friendly and playful Labrador looking for a loving home.',
    },
    {
      id: 2,
      name: 'Daisy',
      breed: 'Golden Retriever',
      age: 3,
      description: 'Daisy is a sweet and gentle Golden Retriever who loves cuddles.',
    },
    // Add more dog objects as needed
  ]);

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Dog Adoption Website
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dogs">
                Dogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dogs" render={(props) => <DogList {...props} dogs={dogs} />} />
          <Route path="/dogs/:id" render={(props) => <DogDetails {...props} dogs={dogs} />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
