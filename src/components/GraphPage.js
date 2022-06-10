
import { Table, Spinner, Container, Col, Button, Row, ListGroup } from "react-bootstrap";
import LuceGraph from './LuceGraph';

export default function GraphPage() {
    return (

        <Container fluid>
            <Row>
                <Col sm={9} height="100%" >
                    <LuceGraph></LuceGraph>
                </Col>
                <Col sm={2} height="100%" className='mt-4 p-4 pb-2 bg-light rounded-3'>

                    <Table>
                        <thead className="text-center" class="text-black-50">
                            <tr class="text-dark">
                                <th>Color</th>
                                <th>Tipo de actividad</th>
                            </tr>
                            <tr>
                                <th>Verde</th>
                                <th>Artística</th>
                            </tr>
                            <tr>
                                <th>Malva</th>
                                <th>Voluntariado</th>
                            </tr>
                            <tr>
                                <th>Amarillo</th>
                                <th>Deportiva</th>
                            </tr>
                            <tr>
                                <th>Azul</th>
                                <th>Musical</th>
                            </tr>
                            <tr>
                                <th>Política</th>
                                <th>Rosa</th>
                            </tr>
                            <tr>
                                <th>Ocio</th>
                                <th>Turquesa</th>
                            </tr>
                            <tr>
                                <th>Talleres</th>
                                <th>Rojo</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}