import { Children, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, Form, FormCheck, Navbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import Logo from "../../images/Logo.png";
import './Menu.scss';
import { faBars, faCalendar,faSquareInstagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Menu(props) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(getLangageFromStorage);

  function getLangageFromStorage() {
    return localStorage.getItem("lang") === undefined ? "PL" : localStorage.getItem("lang")
  }

  const changeLanguage = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value)
  }

  return (
    <>
      <Navbar className='position justify-content-around'>
        <ToggleButtonGroup type="checkbox" value={lang}>
          <ToggleButton id="tbg-btn-2" value={"EN"} variant="outline-secondary" onChange={(e) => changeLanguage(e)}>
            EN
          </ToggleButton>
          <ToggleButton id="tbg-btn-3" value={"PL"} variant="outline-secondary" onChange={(e) => changeLanguage(e)}>
            PL
          </ToggleButton>
        </ToggleButtonGroup>
        <Navbar.Brand href="/" className='text_color'>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          REHASTEON GROUP
        </Navbar.Brand>
        <Dropdown show={open} onToggle={() => setOpen(!open)}>
          <Dropdown.Toggle
            as="button"
            className="btn btn-outline-secondary custom-dropdown-toggle"
            id="dropdown-button-drop-down-centered"
          >
            <FontAwesomeIcon icon={faBars} />
          </Dropdown.Toggle>
          <Dropdown.Menu align={"end"} variant='dark'>
            <Dropdown.Item  href='/'>main</Dropdown.Item>
            <Dropdown.Item  href='osteo'>osteo</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      {props.children}
    </>
  )
}
export default Menu;