import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React from 'react';
import CarouselElement from './components/CarouselElement';
import Self from './components/Self';
import Menu from './components/Menu';
import Contact from './components/Contact';
import OnlineMap from './components/OnlineMap';
import { I18nProvider } from './components/i18n';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Fizjo from './images/Fizjo.png';
import Osteo from './components/Osteo';

function App() {
    if (sessionStorage.getItem('language') == null) {

        sessionStorage.setItem('language', 'pl-PL')
    }
    return (
        <I18nProvider locale={sessionStorage.getItem('language')}>
            <Row>
                <Menu />
            </Row>
            <Row className='general__container'>
          
      <CarouselElement />
      </Row>
      <Row className='general__container'>
  <Self/>
  </Row>
  <Row className='general__container'>
  <Osteo/>
  </Row>

<Row className='general__container'>
      <Col>
      <Contact/>
      </Col>
      <Col>
      <OnlineMap />
      </Col> 
            </Row>
        </I18nProvider>
    )
}



export default App;
