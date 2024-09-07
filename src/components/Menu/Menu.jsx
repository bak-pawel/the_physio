import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import './Menu.scss';
export const Menu = (handleScroll) => {

    const setLanguageToCookies = () => {
        if (sessionStorage.getItem('language') === "pl-PL") {
            sessionStorage.setItem('language', 'en-US')
            window.location.reload(false)

        }
        else {
            sessionStorage.setItem('language', 'pl-PL')
            window.location.reload(false)
        }
    }
    const checkedFunkcion = () => {
        if (sessionStorage.getItem('language') === "pl-PL") {
            return (false)
        } else {
            return (true)
        }
    }
    return (
 <Dropdown className='button-position'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" >
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onScroll={()=>handleScroll}>Action</Dropdown.Item>
        <Dropdown.Item onScroll={()=>handleScroll}>Another action</Dropdown.Item>
        <Dropdown.Item onScroll={()=>handleScroll}>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}