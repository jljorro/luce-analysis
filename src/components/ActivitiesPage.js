import React from 'react';

import { Container, Row, Form, Button, Col } from 'react-bootstrap';

import ActivityTable from "./ActivityTable"

export default function ActivitiesPages() {
    return (
        <Container className="py-2">

        <Row>
          <Col className='mt-4 p-4 pb-2 bg-light rounded-3'>
              <h1 className='pb-2'>Actividades</h1>
              <hr class="bg-danger border-2 border-top border-secondary"></hr>
              <Row className="pb-3">
              <Form column="true">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre de la actividad"/>
                </Form.Group>
                <Form.Group className='mb-2'>
                  <Form.Label>Facultad</Form.Label>
                  <Form.Control type="text" placeholder="Nombre de la facultad"/>
                </Form.Group>
                
                <Button className="me-2" variant="primary" type="button" >Buscar</Button>
                <Button variant="secondary" type="button"> Limpiar</Button>
              </Form>
              </Row>
            
          </Col>
        </Row>
       
        <Row className="mt-2 p-4">
          <ActivityTable />
        </Row>
        
      </Container>
    );

}