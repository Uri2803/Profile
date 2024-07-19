import React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';

const DivAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const InfoContainer = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 30px;
    pading: 0 30px

`;

export default function Aboutme() {
  return (
    <>
    <Header/>
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <DivAvatar>
            <Avatar sx={{ width: 270, height: 270 }} alt="Remy Sharp" src="/public/avata.png" />    
        <InfoContainer>
        <Typography> 
         Tính năng đang phát triển
        </Typography>

        </InfoContainer>
       

      </DivAvatar>
            
      </Grid>
      <Grid item>
       

      </Grid>  
    </Grid>
      
    </>
   
  );
}
