import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const DogDetails = ({ dogs }) => {
  const { id } = useParams();
  const dog = dogs.find((dog) => dog.id.toString() === id);

  return (
    <>
      <h1>{dog.name} Details</h1>
      <Card>
        <Card.Body>
          <Card.Title>{dog.name}</Card.Title>
          <Card.Text>
            <strong>Breed:</strong> {dog.breed}
            <br />
            <strong>Age:</strong> {dog.age}
            <br />
            <strong>Description:</strong> {dog.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DogDetails;
