// src/Player.js

import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
  width: '18rem',
  margin: '1rem auto',
  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  textAlign: 'center',
  backgroundColor: '#f8f9fa',
};

const imgStyle = {
  height: '250px',
  objectFit: 'cover',
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
};

const textStyle = {
  fontSize: '0.95rem',
  color: '#333',
  lineHeight: '1.6',
};

function Player({ name, team, nationality, jerseyNumber, age, image }) {
  return (
    <Card
      style={cardStyle}
      className="player-card"
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <Card.Img variant="top" src={image} alt={name} style={imgStyle} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          {name}
        </Card.Title>
        <Card.Text style={textStyle}>
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
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  image: 'https://via.placeholder.com/250x250.png?text=No+Image',
};

export default Player;
