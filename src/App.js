import React from 'react';
import './App.css';
import PlayersList from './PlayersList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="py-4">
      <h1 className="text-center text-primary mb-4">⚽ FIFA Player Cards</h1>
      <PlayersList />
    </Container>
  );
}

export default App;
