import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Color from '../../../constant/palette';
import Card from '../card';
import CarrouselDirection from '../carrouselDirection';
import { FacilityInfo } from '../type';
import { addDataAtBothEnds, handleDot } from '../utils';

interface CarrouselPresenterParams {
  handleDirection: (isLeft: boolean, arr: FacilityInfo[]) => void;
  array: FacilityInfo[];
  cardListRef: React.MutableRefObject<HTMLDivElement | null>;
  copyArray: FacilityInfo[];
  initialNum: number;
}

const CarrouselPresenter = (props: CarrouselPresenterParams) => {
  const copyArray = addDataAtBothEnds(props.array);
  const cardListRef = useRef<HTMLDivElement | null>(null);
  let initialNum: number;
  useEffect(() => {
    initialNum = -900;
    if (cardListRef.current) {
      cardListRef.current.style.transform = `translateX(${initialNum}px)`;
    }
    const dotElem = document.getElementById(`dot_${1}`);
    if (dotElem) {
      dotElem.style.backgroundColor = `${Color.GRAY}`;
    }
  }, []);
  return (
    <Wrapper>
      <Container>
        <CarrouselDirection
          onClick={() => props.handleDirection(true, props.array)}
        />
        <CardListWrapper>
          <CardListContainer
            ref={props.cardListRef}
            width={(props.array.length + 2) * 900}
          >
            {props.copyArray.map((card) => (
              <Card key={`$cardList_${card.id}`} card={card} />
            ))}
          </CardListContainer>
        </CardListWrapper>
        <CarrouselDirection
          right
          onClick={() => props.handleDirection(false, props.array)}
        />
      </Container>
      <CarrouselDotList>
        {props.array.map((el, idx) => (
          <CarrouselDot
            key={el.id}
            id={`dot_${idx + 1}`}
            onClick={() =>
              handleDot(
                idx + 1,
                props.initialNum,
                props.array,
                props.cardListRef,
              )
            }
          />
        ))}
      </CarrouselDotList>
    </Wrapper>
  );
};

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
  width: ${(props: { width: number }) => props.width};
  height: 440px;
`;

export default CarrouselPresenter;
