import React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
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

const BoxInfor = styled(Box)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px
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
const StyledAvatar = styled.img`
  width: 20vw;
  margin: 10px;
  height: 20vw;
  border-radius: 50%;
  object-fit: cover;
 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 30vw;
    height: 30vw;
  }
  @media (max-width: 480px) {
    width: 25vw;
    height: 25vw;
  }
`;
const InfoContainer = styled(Box)`
    width: 50vw;
    @media (max-width: 768px) {
      width: 40vw;
    }
    @media (max-width: 480px) {
        width: 60vw;
    }
    justify-content: center;
    align-items: center;
    margin: 10px ;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
    padding: 10px;
    border-radius: 15px;
    transition: transform 0.3s ease ease;
    &:hover {
    box-shadow: 0 8px 16px rgba(0.1, 0.1, 0.1, 0.5); 
  }
`;

const Title = styled.h2`
  font-size: 1.2vw;
  @media (max-width: 768px) {
    font-size: 2.3vw;
  }
  @media (max-width: 480px) {
    font-size: 3.3vw;
  }
`;
const TextInfor = styled.p`
   font-size: 1vw;
   @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }

`;

const InfoTitle = styled.h3`

  margin-bottom: 0.5em;
  font-size: 1.1vw;
  @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;


export default function Aboutme({user}) {
  return (
    <MainContainer>
        <Header/>
        <BoxInfor>
            <DivAvatar>
                <StyledAvatar src="/public/avata.png" alt="ava1" />
            </DivAvatar>

            <InfoContainer>
               <Title variant='h6'> WHO I AM ?</Title>
                <TextInfor>{user.whoIAm} </TextInfor>
            </InfoContainer>
            
        </BoxInfor>

        <BoxInfor>
            <InfoContainer>
                <Title>Programming Knowledge </Title>
                {user.programmingKnowledge.map((section, index) => (
                <div key={index}>
                    <InfoTitle>- {section.title}: </InfoTitle>
                    <TextInfor>
                    {section.items.map((item, index) => (
                        <TextInfor key={index}>+ {item}</TextInfor>
                    ))}
                    </TextInfor> 
                </div>
                ))}
            </InfoContainer>
            <DivAvatar>
                <StyledAvatar src="/public/pro.png" alt="ava2" />
            </DivAvatar>
        </BoxInfor>

        <Footer/>

    </MainContainer>
   
      
   
   
  );
}
