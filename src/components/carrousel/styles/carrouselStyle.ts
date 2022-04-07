import styled from 'styled-components';
import Color from '../../../constant/palette';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CarrouselDotList = styled.div`
  display: flex;
  height: 30px;
  justify-content: center;
  margin-top: 20px;
`;

const CarrouselDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${Color.LIGHTGRAY};
  margin-right: 14px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  @media screen and (min-width: 0px) and (max-width: 425px) {
    height: 250px;
  }
  height: 440px;
  justify-content: center;
  align-items: center;
`;

const CardListWrapper = styled.div`
  @media screen and (min-width: 0px) and (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (min-width: 425px) and (max-width: 1024px) {
    width: 450px;
  }
  width: 900px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 440px;
  position: relative;
  overflow: hidden;
  float: left;
`;

const CardListContainer = styled.div`
  display: flex;
  height: 440px;
  width: ${(props: { size: number }) => props.size};
`;

export {
  Wrapper,
  CarrouselDotList,
  CarrouselDot,
  Container,
  CardListWrapper,
  CardListContainer,
};
