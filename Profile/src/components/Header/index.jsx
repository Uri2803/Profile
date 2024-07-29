import React from 'react'
import { Grid, Toolbar , Container, Box} from '@mui/material'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledToolbar = styled(Toolbar)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledNavLink = styled(NavLink)`
  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
  text-decoration: none;
  color: #FFFF;
  margin: 10px;
  padding: 10px 10px;
  font-family: Merriweather;
  &.active {
    font-weight: bold;
    color: #f5d7ec;
  }
`;
export default function Header() {
  return (
    <StyledToolbar>
        <StyledNavLink to="/" exact activeClassName="active">
              HOME
            </StyledNavLink>
            <StyledNavLink to="/about" activeClassName="active">
              ABOUT ME
            </StyledNavLink>
            <StyledNavLink to="/contact" activeClassName="active">
              CONTACT
      </StyledNavLink>

    </StyledToolbar>
    
  )
}
