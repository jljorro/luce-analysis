
import { Container, Col, Button, Row } from 'react-bootstrap';
import Plot from 'react-plotly.js';

import actividades from '../data/Actividades.json';

export default function ActivityDetail () {

    const actividad = actividades[0]
    
    const dataPlot1 = [
        {
            values: [19, 8],
            labels: ['Femenino', 'Masculino'],
            type: 'pie',
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true,
            marker: {
                colors: ['#F29F05','#038C73']
            }
        }]

    const layoutPlot1 = {
        height: 300, 
        width: 350, 
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        showlegend: false 
    }

    const dataPlot2 = [
        {
            y: [19, 6, 2],
            x: ['Grado', 'Master', 'Doctorado'],
            type: 'bar',
            text: ['Grado - 19', 'Master - 6', 'Doctorado - 2'],
            textposition: 'auto',
            automargin: true,
            marker: {
                color: '#A1C7E0',
            },
        }]
        
    const layoutPlot2 = {
        height: 300, 
        width: 350, 
        margin: {"t": 0, "b": 0, "l": 0, "r": 0},
        
    }

    const dataPlot3 = [
        {
            x: ["37","18","17","20","18","17","27","18","18","23","18","18","17","18","45","17","24","19","17","22","18","20","18","17","17","17","20"],
            hovertemplate: '<i>Rango Edad</i>: %{x}' +
                            '<br><b>Participantes</b>: %{y}<br>',
            xbins: {
                end: 46,
                start: 17,
                size: 1
            },
            marker: {
                color: '#FF9933',
            },
            type: 'histogram',
        }]
        
    const layoutPlot3 = {
        height: 300, 
        width: 350, 
        margin: {"t": 0, "b": 20, "l": 0, "r": 0},
        bargap: 0.05, 
        bargroupgap: 0.2, 
        barmode: "overlay", 
    }

    return (
        <Container className="py-2">
            <Row>
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
            </Row>
            <Row>
                <Col className='mt-4 ps-4'>
                    <h3>Estadísticas de participación</h3>
                </Col>
            </Row>
            <Row>
                <Col className='mt-4 ps-4'>
                    <div className='ps-2 border'>
                        <p className='mb-0'><strong>Género</strong></p>
                        <Plot data={dataPlot1} layout={layoutPlot1}/>
                    </div>
                </Col>
                <Col className='mt-4 ps-4'>
                    <div className='ps-2 border'>
                        <p className='mb-0'><strong>Titulación</strong></p>
                        <Plot data={dataPlot2} layout={layoutPlot2}/>
                    </div>
                </Col>
                <Col className='mt-4 ps-4'>
                    <div className='ps-2 border'>
                        <p className='mb-0'><strong>Edad</strong></p>
                        <Plot data={dataPlot3} layout={layoutPlot3}/>
                    </div>
                </Col>
            </Row>
            
        </Container>
    );

}