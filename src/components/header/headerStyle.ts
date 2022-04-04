import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export const LoginButton = styled.button`
  width: 100px;
  height: 38px;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 40px;
  color: ${Color.GRAY};
  background-color: ${Color.WHITE};
`;

export const KakaoButton = styled.button`
  position: relative;
  width: 300px;
  height: 50px;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  color: ${Color.BROWN};
  background-color: ${Color.YELLOW};
  :hover {
    color: ${Color.WHITE};
    background-color: ${Color.BLACK};
  }
  span {
    ${Font.SUBTITLE_2}
  }
`;

export const CommentIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 20px;
  font-size: 20px;
`;
