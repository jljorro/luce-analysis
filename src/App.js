import './App.css';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ActivitiesPage from './components/ActivitiesPage';
import ActivityDetail from './components/ActivityDetail';
import LuceGraph from './components/LuceGraph';

export default function App() {

  return (
    <BrowserRouter>
      <Navbar bg="light">
        <Container>
         
          <Navbar.Brand>
          <img
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="LUCE logo"
          />{' '}LUCE-Analysis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" >Actividades</Nav.Link>
            <Nav.Link href="/graph">Grafo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<ActivitiesPage/>}></Route>
        <Route path="/activity" element={<ActivityDetail/>}></Route>
        <Route path="/graph" element={<LuceGraph />}></Route>
      </Routes>
   </BrowserRouter>
  );

}