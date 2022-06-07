import './App.css';

//import { useState } from 'react';
//import { Activity } from './Activity';
import ActivityTable from './components/ActivityTable'
/*import {
  create as createActivity, 
} from './services/activitiesSrv'*/
import { Container, Nav, Navbar, Row, Form, Button } from 'react-bootstrap';


export default function App() {
  //const [activities, setActivities] = useState([])
  //const [newActivity, setNewActivity] = useState("")

  /*const handleChange = (event) => {
    setNewActivity(event.target.value)
  }*/

  /*const handleSubmit = (event) => {
    event.preventDefault()

    const activityAddToState = {
      "userId": 1,
      "title": newActivity,
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    createActivity(activityAddToState)
    .then(newActivity => {
      setActivities(prevNotes => prevNotes.concat(newActivity))
    })

    setNewActivity("")
  }*/

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>LUCE-Analysis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Actividades</Nav.Link>
            <Nav.Link>Grafo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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

      {/* <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newActivity}/>
        <button>Crear actividad</button>
      </form> */}
   </>
  );

}