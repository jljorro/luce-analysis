import React from "react";
import { Container, Nav } from "react-bootstrap";

export default function Navbar () {
    return (
        <Navbar bg="light">
        <Container>
          <Navbar.Brand>LUCE-Analysis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Actividades</Nav.Link>
            <Nav.Link>Grafo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}