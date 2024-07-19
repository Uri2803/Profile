import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Header from '../../components/Header';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex: 1;
`;

const DivAvatar = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  
  
`;

const StyledAvatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%; /* Bo tròn hình ảnh */
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s ease ease;
  &:hover {
    transform: scale(1.1);
   
  }
`;

const InfoContainer = styled(Box)`
  margin: 20x;
  padding: 20px;
`;

const InfoText = styled.p`
  font-family: 'Merriweather', serif;
  font-size: 21px;
  font-weight: 400;
  color: #333;
  margin: 10px 0;
  line-height: 1.6;
  letter-spacing: 0.5px;
  &:hover {
    color: #7A54DB; 
  }
`;

const GoalText = styled.p`
  font-family: 'Monospace', monospace;
  font-size: 20px;
  font-weight: 300;
  color: #333;
  margin: 20px 0;
  line-height: 1.6;
  letter-spacing: 0.1px;
  text-align: center;
`;

const SkillContainer = styled(Box)`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillText = styled.p`
  font-family: 'Courier', monospace;
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;
const FooterContainer = styled(Box)`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFF;
`
;

export default function Mainpage({ user }) {
  return (
    <MainContainer>

      <Header />
      <DivAvatar>
        <StyledAvatar src={user.avatarUrl} alt="avatar" />
        <InfoContainer>
        <InfoText>Name: {user.name}</InfoText>
        <InfoText>Age: {user.age}</InfoText>
        <InfoText>University: {user.education.university}</InfoText>
        <InfoText>Major: {user.education.major}</InfoText>
        <InfoText>Email: {user.email}</InfoText>
        <InfoText>Phone: {user.phone}</InfoText>
      </InfoContainer>
        
      </DivAvatar>
      <div>
      <GoalText>{user.goal}</GoalText>
        <SkillContainer>
          <SkillText><strong>Programming Language:</strong> {user.skills.programming}</SkillText>
          <SkillText><strong>Web Development:</strong> {user.skills.webDevelopment}</SkillText>
          <SkillText><strong>Database:</strong> {user.skills.database}</SkillText>
        </SkillContainer>

      </div>
      <FooterContainer>
        © {new Date().getFullYear()} Huỳnh Minh Quang. All rights reserved.
      </FooterContainer>   
      

      
    </MainContainer>
  );
}
