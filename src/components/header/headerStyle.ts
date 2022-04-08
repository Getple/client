import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2.5rem;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const HeaderButton = styled.button`
  border: none;
  color: ${Color.GRAY};
  background-color: transparent;
  ${Font.SUBTITLE_2}
  :hover {
    color: ${Color.BLACK};
  }
  :first-child {
    margin: 0 1.25rem;
  }
`;

export const KakaoButton = styled.button`
  position: relative;
  width: 18.75rem;
  height: 3.125rem;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
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
  font-size: 1.25rem;
`;
