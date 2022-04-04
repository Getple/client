import React from 'react';
import styled from 'styled-components';
import Font from '../constant/fontStyle';
import Color from '../constant/palette';

type LogoProps = {
  type: string;
};

const Logo = ({ type }: LogoProps) => {
  return <LogoContainer type={type}>GETPLE</LogoContainer>;
};

export default Logo;

const LogoContainer = styled.div`
  ${Font.LOGO}
  color: ${({ type }: LogoProps) => type === 'footer' && Color.WHITE};
`;
