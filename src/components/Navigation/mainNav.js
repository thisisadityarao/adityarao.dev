/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { Moon } from 'styled-icons/fa-solid/Moon';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Toggle from './mobileNav';

const StyledLink = styled(Link)`
  cursor: pointer;
  margin: 0;
  display: inline-block;
  position: relative;
  padding: 10px 20px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;
  background-color: transparent;

  &:visited {
    color: #595959;
  }
  &:link {
    text-decoration: none;
    color: #595959;
  }
  &:focus,
  &:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
    box-shadow: none;
    background: #e8ebed;
    border-radius: 4px;
    transition: all 0.2s ease-in-out 0s;
  }
  &:active {
    color: rgb(0, 0, 0);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavigationWrapper = styled.nav`
  cursor: pointer;
  width: 100%;
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.25;

  @media (min-width: 768px) {
    font-size: 20px;
    padding: 0 40px;
    height: 120px;
  }

  .mobile-nav {
    display: block;
    visibility: visible;

    :hover {
      cursor: pointer;
    }

    @media (min-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-family: 'Clear Sans';
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 2px;
  transition: all 0.2s ease-in-out 0s;

  &:link {
    color: #29384c;
    text-decoration: none;
  }
  &:visited {
    color: #29384c;
  }
  &:focus,
  &:hover {
    color: #29384c;
  }
  &:active {
    color: #29384c;
  }

  span {
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const DarkMode = ({ darkMode, setDarkMode }) => (
  <DarkModeButton onClick={() => setDarkMode(!darkMode)} />
);

const DarkModeButton = styled(Moon)`
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: block;
  margin-right: 2rem;
`;

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Hook
function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark';
      const element = window.document.body;
      if (enabledState) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabledState] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabledState, setEnabledState];
}

function Navigation() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <NavigationWrapper>
      <Logo href="/">
        <span className="logo">ADITYA RAO</span>
      </Logo>
      <Nav className="navigation">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        <Toggle className="mobile-nav" />
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about/">About Me</StyledLink>
        <StyledLink to="/blog/">Blog</StyledLink>
        <StyledLink to="#contact">Contact</StyledLink>
      </Nav>
    </NavigationWrapper>
  );
}

export default Navigation;
