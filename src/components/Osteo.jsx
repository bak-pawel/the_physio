import React, { useState } from 'react';
import '../App.scss';
import Osteopatia from "../images/Osteo.png";
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import translate from './i18n/translate';

function Osteo() {
  return (
    <Row>
      <Col className='d-flex align-items-center justify-content-center row-hight'>
        <Image src={Osteopatia} className="picture" />
      </Col>
      <Col className='d-flex align-items-center justify-content-center row-hight'>
        <div className='text__style'>
          <h1 > {translate('osteo header')}</h1>
          <h4 className='text__style'> {translate("osteo")}</h4>
        </div></Col>
    </Row>
  );
}
export default Osteo;