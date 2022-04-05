import styled from 'styled-components';
import Color from '../../constant/palette';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  color: ${Color.WHITE};
  background-color: ${Color.DARKGRAY};
`;

export const FooterItem = styled.div`
  max-width: 1120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const TopItemsColumn = styled.div`
  display: flex;
  flex-direction: column;

  span {
    position: relative;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  span:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #fff;
    height: 2px;
    box-sizing: border-box;
    width: 95px;
  }

  ul {
    li {
      margin-bottom: 1rem;
      cursor: pointer;
      transition: all 0.5s;

      a {
        color: ${Color.WHITE};
        text-decoration: none;
      }
    }
  }
  li:hover {
    transform: translateX(30px) scale(1.4);
  }
`;
