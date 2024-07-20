import React from 'react'
import { Grid, Toolbar , Container, Box} from '@mui/material'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled(Box)`
  
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;

   @media (max-width: 768px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
    © 2024 Huỳnh Minh Quang. All rights reserved.
    </FooterContainer>  
  )
}
