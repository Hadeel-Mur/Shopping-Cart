import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';

function App() {
  return (
    <Container>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="success">
            <Route index element={<Success />} />
          </Route>
          <Route path="cancel">
            <Route index element={<Cancel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
