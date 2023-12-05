import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../images/logo_to_navbar.png';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import translate from './i18n/translate';

const Menu = () =>{
  const setLanguageToCookies = () =>{
    if(sessionStorage.getItem('language') === "pl-PL"){
      sessionStorage.setItem('language','en-US')
      window.location.reload(false)
      
    }
    else{
     sessionStorage.setItem('language','pl-PL')
     window.location.reload(false)
    }
  }
  const checkedFunkcion= ()=>{
    if(sessionStorage.getItem('language') === "pl-PL"){
    return(false)
    }else{
      return(true)
    }
  }
    return(
      
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              src={logo}
              width="35px"
              height="35px"
              className="d-inline-block align-top"
              alt=""
            />
            Rehastone Group</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
          
           <Nav className='menu__redirect__button'>
            <Button className='menu__redirect__gray__button' size='sm' variant='dark' onClick={()=>{window.open('https://www.znanylekarz.pl/marcin-kasprowicz/fizjoterapeuta/poznan#tab=profile-experience')}}>{translate('hello')} </Button>
            </Nav>
            <Nav className='menu__redirect__button'>
            <FaInstagram size={35} onClick={()=>window.open('https://www.instagram.com/rehasteongroup/')}/>
              </Nav>
              <Nav className='menu__redirect__button'>
              <FaFacebook size={35} onClick={()=>window.open('https://www.facebook.com/RehasteonGroup')}/>
              </Nav>
              <Form>
      <Form.Check 
      feedbackTooltip='Siema'
        type="switch"
        id="custom-switch"
        label="PL/EN"
        className='language__switch'
        defaultChecked={checkedFunkcion()}
        onChange={()=>setLanguageToCookies()}
      />
      
    </Form>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Menu;