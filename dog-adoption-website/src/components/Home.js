import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Jumbotron>
      <h1>Welcome to Dog Adoption!</h1>
      <p>
        We have a variety of adorable dogs ready for adoption. Click below to see the list of dogs available.
      </p>
      <Link to="/dogs">
        <Button variant="primary">View Dogs</Button>
      </Link>
    </Jumbotron>
  );
};

export default Home;
