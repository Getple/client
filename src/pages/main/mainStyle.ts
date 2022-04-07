import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';

const Container = styled.div`
  max-width: 1120px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const AccountButton = styled.button`
  position: relative;
  width: 300px;
  height: 50px;
  padding: 15px 20px;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 8px;
  background-color: ${Color.WHITE};
  :first-child {
    margin-bottom: 20px;
  }
  :hover {
    color: ${Color.WHITE};
    background-color: ${Color.BLACK};
    border: 1px solid ${Color.BLACK};
  }
  span {
    ${Font.SUBTITLE_3}
  }
`;

const CommentIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 20px;
  font-size: 20px;
`;

export { Container, AccountButton, CommentIcon };
