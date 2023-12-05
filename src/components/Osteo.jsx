import React, { useState } from 'react';
import '../App.scss';
import Osteopatia from "../images/Osteo.png";
import Marcinek from '../images/Marcinek.JPG';
import Fizjo from '../images/Fizjo.png';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Osteo() {
  return (
       <Col className='picture__carousel'>
        <Image src={Osteopatia} className="picture"/>
        <h2 className='text__style'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt molestias modi iure alias, quidem repellat voluptas ipsa dolorem at autem ut itaque obcaecati dolorum debitis sequi, corrupti iusto in!</h2>
        </Col>
  );
}
export default Osteo;