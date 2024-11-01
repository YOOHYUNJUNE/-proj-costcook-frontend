import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AdminHeader = ({ title, rightLabel, isRegisterEnabled, onBackClick, onSubmit }) => (
  <HeaderContainer>
    <IconWrapper onClick={onBackClick}>
      <ArrowBackIconStyled />
    </IconWrapper>
    <Title>{title}</Title>
    <RightWrapper>
      {rightLabel && (
        <RegisterLabel
          isEnabled={isRegisterEnabled}
          onClick={isRegisterEnabled ? onSubmit : undefined}
        >
          {rightLabel}
        </RegisterLabel>
      )}
    </RightWrapper>
  </HeaderContainer>
);

export default AdminHeader;

// 스타일 컴포넌트 정의
const HeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #343a40;
  color: #fff;
  height: 64px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: #ffc107;
  }
`;

const ArrowBackIconStyled = styled(ArrowBackIcon)`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  margin: 0;
  text-align: center;
  flex-grow: 1;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterLabel = styled.span`
  margin-right: 16px;
  font-size: 1rem;
  color: ${(props) => (props.isEnabled ? '#007bff' : '#aaa')};
  cursor: ${(props) => (props.isEnabled ? 'pointer' : 'not-allowed')};
  font-weight: bold;
`;