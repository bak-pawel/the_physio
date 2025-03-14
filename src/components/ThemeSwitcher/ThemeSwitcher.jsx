import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../ThemeHook';
import { Button, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
  const {theme, setTheme} = useGlobalContext();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Nav.Link href="">
      <FontAwesomeIcon icon={theme =="dark"?faSun:faMoon} onClick={toggleTheme}/>
    </Nav.Link>
  );
};

export default ThemeSwitcher;