import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, } from 'react-bootstrap';
import Logo from "../../images/Logo.png";
import './Main.scss';
const Main = () => {
    return (
        <Row className='background font_size'>
            <Image src={Logo} className='picture' />
        </Row>
    )
}
export default Main;