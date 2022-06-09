import React from 'react';

import { Container, Row, Form, Button } from 'react-bootstrap';

import ActivityTable from "./ActivityTable"

export default function ActivitiesPages() {
    return (
        <Container>
        <Row>
          <h1>Actividades</h1>
        </Row>

        <Row>
          <Form column="true">
            <h3>Buscar actividades</h3>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre de la actividad"/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Facultad</Form.Label>
              <Form.Control type="text" placeholder="Nombre de la facultad"/>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" >Buscar</Button>
            <Button variant="secondary" type="button"> Limpiar</Button>
          </Form>
        </Row>

        <br></br>
        <Row>
          <ActivityTable />
        </Row>
        
      </Container>
    );

}