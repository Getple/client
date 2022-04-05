import { useEffect, useRef } from 'react';
import { addDataAtBothEnds, dotMarking, handleDot } from './utils';
import { FacilityInfo } from './type';
import Color from '../../constant/palette';
import CarrouselDirection from './carrouselDirection';
import Card from './card';
import {
  CardListContainer,
  CardListWrapper,
  CarrouselDot,
  CarrouselDotList,
  Container,
  Wrapper,
} from './styles/carrouselStyle';

interface CarrouselParams {
  array: FacilityInfo[];
}

const Carrousel = (props: CarrouselParams) => {
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

  const handleDirection = (isLeft: boolean, arr: FacilityInfo[]) => {
    if (isLeft) {
      if (cardListRef.current) {
        if (initialNum === -900) {
          cardListRef.current.style.transform = `translateX(${
            initialNum + 900
          }px)`;
          setTimeout(() => {
            initialNum -= arr.length * 900;
            dotMarking(initialNum, arr);
            if (cardListRef.current) {
              cardListRef.current.style.transitionDuration = '0ms';
              cardListRef.current.style.transform = `translateX(${initialNum}px)`;
            }
          }, 500);
        }
        initialNum += 900;
        dotMarking(initialNum, arr);
        cardListRef.current.style.transform = `translateX(${initialNum}px)`;
        cardListRef.current.style.transitionDuration = '500ms';
      }
    } else {
      if (cardListRef.current) {
        if (initialNum === -900 * arr.length) {
          cardListRef.current.style.transform = `translateX(${
            initialNum - 900
          }px)`;
          setTimeout(() => {
            initialNum += arr.length * 900;
            dotMarking(initialNum, arr);
            if (cardListRef.current) {
              cardListRef.current.style.transitionDuration = '0ms';
              cardListRef.current.style.transform = `translateX(${initialNum}px)`;
            }
          }, 500);
        }
        initialNum -= 900;
        dotMarking(initialNum, arr);
        cardListRef.current.style.transform = `translateX(${initialNum}px)`;
        cardListRef.current.style.transitionDuration = '500ms';
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <CarrouselDirection
          onClick={() => handleDirection(true, props.array)}
        />
        <CardListWrapper>
          <CardListContainer
            ref={cardListRef}
            width={(props.array.length + 2) * 900}
          >
            {copyArray.map((card) => (
              <Card key={`$cardList_${card.id}`} card={card} />
            ))}
          </CardListContainer>
        </CardListWrapper>
        <CarrouselDirection
          right
          onClick={() => handleDirection(false, props.array)}
        />
      </Container>
      <CarrouselDotList>
        {props.array.map((el, idx) => (
          <CarrouselDot
            key={el.id}
            id={`dot_${idx + 1}`}
            onClick={() =>
              handleDot(idx + 1, initialNum, props.array, cardListRef)
            }
          />
        ))}
      </CarrouselDotList>
    </Wrapper>
  );
};

export default Carrousel;
