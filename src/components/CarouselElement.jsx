import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.scss';
import Marcinek from '../images/Marcinek.JPG';
import Osteo from '../images/Osteo.png';
import Fizjo from '../images/Fizjo.png';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import translate from './i18n/translate';

function CarouselElement() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={3000} activeIndex={index} onSelect={handleSelect} className='carousel__container'>
       <Carousel.Item>
       <Col className='picture__carousel'>
        <Image src={Marcinek} roundedCircle className='carousel__picture'/>
        </Col>
        <Carousel.Caption>
          <h1 className='text__size'>{translate('hello')}</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <Col className='picture__carousel'>

        <Image src={Osteo} roundedCircle className='carousel__picture'/>

        <Carousel.Caption>
          <h1 className='fizjo__label text__size'>{translate('physiotherapy')}</h1>
        </Carousel.Caption>
          </Col>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Col className='picture__carousel'>
        
      <Image src={Fizjo} roundedCircle className='carousel__picture'/>
        <Carousel.Caption>
          <h1 className='text__size'>{translate('training')}</h1>
        </Carousel.Caption>
          </Col>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <Col className='picture__carousel'>
        
      <Image src={Osteo} roundedCircle className='carousel__picture'/>
        <Carousel.Caption>
          <h1 className='fizjo__label text__size'>{translate('osteopathy')}</h1>
        </Carousel.Caption>
          </Col>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselElement;