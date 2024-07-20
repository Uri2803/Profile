import React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';



const BoxInfor = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

`;
const DivAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const InfoContainer = styled(Box)`
    width: 50vw;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    padding: 20px;
    border-radius: 15px;
    transition: transform 0.3s ease ease;
    &:hover {
    transform: scale(1.1);
  }

`;

export default function Aboutme({user}) {
  return (
    <>
    <Header/>
    <BoxInfor>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <DivAvatar>
            <Avatar sx={{ width: 270, height: 270 }} alt="Remy Sharp" src="/public/avata.png" />    
      </DivAvatar>
            
      </Grid>
      <Grid item>
      
      <InfoContainer >
            <Typography variant="h4">Who I Am?</Typography>
            <Typography variant="h6">{user.bio} </Typography>
        </InfoContainer>
       

      </Grid>  
    </Grid>
    </BoxInfor>
      
    </>
   
  );
}
