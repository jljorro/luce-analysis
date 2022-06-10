
import { Container, Col, Button, Row } from 'react-bootstrap';
//import Plot from 'react-plotly.js';

import actividades from '../data/Actividades.json';

export default function ActivityDetail () {

    const actividad = actividades[0]
    console.log(actividad)

    return (
        <Container className="py-2">
            <Col className='mt-4 p-4 bg-light rounded-3'>
                <h1 className='pb-2'>{actividad.DS_TITLE}</h1>
                <p>{actividad.DS_ABSTRACT}</p>
                <hr class="bg-danger border-2 border-top border-secondary"></hr>
                <Row className="pb-3">
                    <Col><strong>Lugar:</strong> {actividad.CD_ASSOCIATION}</Col>
                    <Col><strong>Fecha:</strong> {actividad.DS_INIT_DATE}</Col>
                    <Col><strong>Categorias:</strong> <span class="badge bg-secondary">{actividad.Categoria}</span></Col>
                    <Col><strong>Participantes:</strong> {actividad.Estudiantes.length} </Col>
                </Row>
                <Button>Inscribir Participante</Button>
            </Col>
        </Container>
        /*<Container>
            <Row><h1>{actividad.DS_TITLE}</h1></Row>
            <Row>
                <h3>Descripción</h3>
                <p>{actividad.DS_ABSTRACT}</p>
            </Row>
            <Row>
                
                <h3>Organizador</h3>
                <p>{actividad.CD_ASSOCIATION}</p>
            </Row>
            <Row>
                <h3>Datos</h3>
                <Col>
                    <Plot data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
                </Col>
            </Row>
        </Container>*/
    );

}