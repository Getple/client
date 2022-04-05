import styled from 'styled-components';
import Color from '../../../constant/palette';

const Wrapper = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 1120px;
  height: 440px;
  justify-content: center;
  align-items: center;
`;

const CardListWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 900px;
  height: 440px;
  position: relative;
  overflow: hidden;
  float: left;
`;

const CardListContainer = styled.div`
  display: flex;
  width: ${(props: { width: number }) => props.width}px;
  height: 440px;
`;

export {
  Wrapper,
  CarrouselDotList,
  CarrouselDot,
  Container,
  CardListWrapper,
  CardListContainer,
};
