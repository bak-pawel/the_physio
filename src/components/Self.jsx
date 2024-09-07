import React, { useState } from 'react';
import '../App.scss';
import Marcinek from '../images/Marcinek.JPG';
import Osteo from '../images/Osteo.png';
import Fizjo from '../images/Fizjo.png';
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import translate from './i18n/translate';

function Self() {

  return (
    <Row>
      <Col className='d-flex align-items-center justify-content-center row-hight'>
        <Image src={Marcinek} className="picture" />
      </Col>
      <Col className='d-flex align-items-center justify-content-center row-hight'>
        <div className='text__style'>
          <h1 > {translate('me')}</h1>
          <h4 > Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt molestias modi iure alias, quidem repellat voluptas ipsa dolorem at autem ut itaque obcaecati dolorum debitis sequi, corrupti iusto in!</h4>
        </div>
      </Col>
    </Row>


  );
}
export default Self;