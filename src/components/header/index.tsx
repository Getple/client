import React from 'react';
import {
  FlexContainer,
  HeaderContainer,
  LoginButton,
  Logo,
} from './headerStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <FlexContainer>
        <Logo>GETPLE</Logo>
        <LoginButton>로그인</LoginButton>
      </FlexContainer>
    </HeaderContainer>
  );
};

export default Header;
