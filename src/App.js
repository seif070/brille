import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">all eyes on me</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
 
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />



      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBaZPkzPMYZlOvsitzMwuhGRE34XBD4oWxFA&usqp=CAU" />
        <Card.Body>
          <Card.Title>Lunettes de soleil Prada</Card.Title>
          <Card.Text>
          Découvrez l'élégance italienne ultime avec ces magnifiques lunettes Prada. Conçues par l'une des maisons de mode les plus prestigieuses au monde, ces lunettes incarnent le mariage parfait entre style intemporel et qualité exceptionnelle. 

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="data:image/png;base64,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" />
        <Card.Body>
          <Card.Title>Lunette de vue Gucci GG1197OA 003 56 Gold Transparent</Card.Title>
          <Card.Text>
          Les lentilles de haute qualité de ces lunettes de vue Gucci sont conçues pour améliorer votre acuité visuelle, vous offrant une vision nette et précise.

Ne manquez pas l'occasion de posséder ces lunettes de vue Gucci exceptionnelles. Elles sont bien plus qu'un simple accessoire de mode, elles sont une déclaration de style et de qualité.

          {' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxUi1HTdvax_ekG5g3vn_R4p-BF2wPM8qcA&usqp=CAU" />
        <Card.Body>
          <Card.Title>Lunettes de soleil ovales Novak Djokovic</Card.Title>
          <Card.Text>
          Découvrez l'essence du style et de la performance avec les lunettes portées par le champion du tennis mondial, Novak Djokovic. Ces lunettes sont bien plus qu'un simple accessoire, elles incarnent la passion pour l'excellence du légendaire joueur de tennis.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    
  

  
    </div>

  );
}

export default App;
