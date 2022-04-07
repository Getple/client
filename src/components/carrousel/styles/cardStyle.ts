import styled from 'styled-components';
import Font from '../../../constant/fontStyle';
import Color from '../../../constant/palette';
const CardContainer = styled.div`
  height: 440px;
  background-image: url(${(props: { image: string }) => props.image});
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  @media screen and (min-width: 0px) and (max-width: 425px) {
    width: 250px;
  }
  @media screen and (min-width: 425px) and (max-width: 1024px) {
    width: 450px;
  }
  width: 900px;
`;

const Info = styled.div`
  width: 400px;
  height: 140px;
  border-radius: 8px;
  background-color: ${Color.WHITE};
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 270px;
  margin-left: 30px;
  @media screen and (min-width: 0px) and (max-width: 425px) {
    display: none;
  }
`;

const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const Name = styled.div`
  ${Font.HEAD_2}
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  ${Font.BODY_3}
`;

export { CardContainer, Info, InfoTop, Name, Like };
