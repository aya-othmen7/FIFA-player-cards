import React from 'react';
import players from './players';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './player';

function PlayersList() {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlayersList;
