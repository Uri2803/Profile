import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const MainContainer = styled.div`
 
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  
  background: ${props => props.theme.background.default}
`;

const DivContainer = styled.div`
    
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`;

export default function Contact ({user}) {
  return (
    <MainContainer>
    <Header/>
        <DivContainer>
        <CircularProgress size={100}/> 
        <Typography> Đang cập nhât ...</Typography>
            
        </DivContainer>
        
       
    <Footer/>
    </MainContainer>
    
    
  )
}
