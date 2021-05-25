import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="mb-3" style={{ color: "#000"}}>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is the example
            </Card.Text>
            <Button variant="primary">Another Button</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">Alert Alert Dudeee</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
