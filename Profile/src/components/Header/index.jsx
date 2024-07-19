import React from 'react'
import { Grid, Toolbar , Container} from '@mui/material'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledToolbar = styled(Toolbar)`
  display="flex"
  justifyContent="center"
  alignItems="center";
   padding: 20px 40px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  color: #FFFF;
  padding: 20px 40px;
  font-family: Merriweather;
  &.active {
    font-weight: bold;
    color: #f5d7ec;
  }
`;
export default function Header() {
  return (
    <StyledToolbar>
      <Container maxWidth="lg" >
            <StyledNavLink to="/" exact activeClassName="active">
              HOME
            </StyledNavLink>
            <StyledNavLink to="/about" activeClassName="active">
              ABOUT ME
            </StyledNavLink>
            <StyledNavLink to="/products" activeClassName="active">
              CONTACT
            </StyledNavLink>
      </Container>
    </StyledToolbar>
  )
}
