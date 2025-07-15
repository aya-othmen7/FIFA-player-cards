import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: '1rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
};

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Jersey Number:</strong> {jerseyNumber} <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  image: "https://via.placeholder.com/150"
};

export default Player;
