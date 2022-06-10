
import { Table, Spinner, Container, Col, Button, Row } from "react-bootstrap";
import LuceGraph from './LuceGraph';

export default function GraphPage() {
    
    const Legend = () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
            </Table>
        )}

    // 
    return (
        
        <Container fluid>
            <Row>
                <Col sm={9} height="100%">
                    <LuceGraph></LuceGraph>
                </Col>
                <Col sm={1} height="100%">
                    HOLA
                </Col>
            </Row>
        </Container>
    );
}