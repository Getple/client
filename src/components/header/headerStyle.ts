import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${Color.GRAY};
`;

export const FlexContainer = styled.div`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Logo = styled.div`
  ${Font.LOGO}
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 38px;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 40px;
  color: ${Color.GRAY};
  background-color: ${Color.WHITE};
`;
