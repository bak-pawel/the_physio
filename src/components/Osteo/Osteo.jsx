import React, { useState } from 'react';
import "./Osteo.scss"
import { Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import translate from '../i18n/translate';

function Osteo() {
  return (
    <Row className='background font_size'>
      Hej! Jestem osteopatą i specjalizuję się w holistycznym leczeniu Twojego ciała.<br />
      Pomagam w redukcji bólu, poprawie mobilności oraz krążenia krwi poprzez techniki manipulacyjne.<br />
      Moim celem jest przywrócenie harmonii w funkcjonowaniu Twoich kości, mięśni i tkanek łącznych.<br />
      Zapraszam na wizytę, aby razem zadbać o Twoje zdrowie!
    </Row>
  );
}
export default Osteo;