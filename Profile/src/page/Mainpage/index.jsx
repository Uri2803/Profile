import React from 'react';
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

const DivAvatar = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledAvatar = styled.img`
  width: 300px;
  max-width: 300px;
  margin: 10px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const InfoContainer = styled(Box)`
  flex: 1;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

const InfoText = styled.p`
  font-family: Monospace;
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
  margin: 10px 0;
  line-height: 1.6;
  letter-spacing: 0.5px;
  &:hover {
    color: #7A54DB; 
  }
    @media (max-width: 768px) {
    font-size: 2vw;
  }

  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

const GoalText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8vw;
  font-weight: 600;
  color: #a87932;
  margin: 10px 0;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
   @media (max-width: 768px) {
    font-size: 2.5vw;
  }
  @media (max-width: 480px) {
    font-size: 3.5vw;
  }
  
`;

const SkillContainer = styled(Box)`
  
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
   border-radius: 10px;
`;

const SkillText = styled.p`
  font-family: 'Nunito', sans-serif;
  color: #505050;
  margin: 5px 0;
  font-weight: 500;
 font-size: 1.3vw;

 @media (max-width: 768px) {
    font-size: 2vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
  }
 line-height: 1.6;
  letter-spacing: 0.1px;
`;



export default function Mainpage({ user }) {
  return (
    <MainContainer>
      <Header />
      <DivAvatar>
        <StyledAvatar src={user.avatarUrl} alt="avatar" />
        <InfoContainer >
          <InfoText><strong> Name:</strong> {user.name}</InfoText>
          <InfoText ><strong> Age:</strong>{user.age}</InfoText>
          <InfoText><strong>University:</strong> {user.education.university}</InfoText>
          <InfoText><strong>Major: </strong>{user.education.major}</InfoText>
          <InfoText><strong> Email: </strong>{user.email}</InfoText>
          <InfoText><strong>Phone: </strong>{user.phone}</InfoText>
        </InfoContainer>
      </DivAvatar>
      <GoalText>{user.goal}</GoalText>
      <SkillContainer>
        <SkillText><strong>Programming Language:</strong> {user.skills.programming}</SkillText>
        <SkillText><strong>Web Development:</strong> {user.skills.webDevelopment}</SkillText>
        <SkillText><strong>Database:</strong> {user.skills.database}</SkillText>
      </SkillContainer>
      <Footer/>
    </MainContainer>
  );
}
