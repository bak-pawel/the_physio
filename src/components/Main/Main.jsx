import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, } from 'react-bootstrap';
import './Main.scss';
import Osteo from '../Osteo/Osteo';
const Main = () => {

  return (
      <Row className='justify-content-center'>
        <Osteo/>
        <Training/>
        <Osteo/>
      </Row>

        // <Row className='background font_size'>
        //     <Image src={Logo} className='picture' />
        // </Row>
    )
}
export default Main;