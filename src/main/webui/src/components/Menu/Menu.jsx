import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './Menu.scss';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useGlobalContext } from '../../ThemeHook';

function Menu(props) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(getLangageFromStorage);
  const { theme } = useGlobalContext();

  function getLangageFromStorage() {
    return localStorage.getItem("lang") === undefined ? "PL" : localStorage.getItem("lang")
  }

  const changeLanguage = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value)
  }

  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsExpanded(window.innerWidth >= 576);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar bg={theme} data-bs-theme={theme} expand="sm" className="bg-body-tertiary max_size">
        <Navbar.Brand href="/" className='ms-5'>Rehasteon Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className={isExpanded ? 'justify-content-end me-5' : ''}>
          <Nav>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/mentoring">Mentoring</Nav.Link>
          <ThemeSwitcher />
            <Nav.Link href="/login"><FontAwesomeIcon icon={faArrowRightToBracket} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </>
  )
}
export default Menu;