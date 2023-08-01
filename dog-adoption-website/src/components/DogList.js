import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const DogList = () => {
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
    
  ]);

  return (
    <>
      <h1>Dogs for Adoption</h1>
      <Row>
        {dogs.map((dog) => (
          <Col key={dog.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{dog.name}</Card.Title>
                <Card.Text>{dog.description}</Card.Text>
                <Link to={`/dogs/${dog.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DogList;
