import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Color from '../../constant/palette';
import { useEffect, useRef } from 'react';
import { dummyData } from './dummyData';
import Font from '../../constant/fontStyle';

const Carrousel = () => {
  const copyDummyData = [...dummyData];
  const firstData = { ...copyDummyData[0], id: `first_${copyDummyData[0].id}` };
  const lastData = {
    ...copyDummyData[copyDummyData.length - 1],
    id: `last_${copyDummyData[copyDummyData.length - 1].id}`,
  };
  copyDummyData.unshift(lastData);
  copyDummyData.push(firstData);

  const cardListRef = useRef<HTMLDivElement | null>(null);
  let initialNum: number;
  useEffect(() => {
    initialNum = -900;
    if (cardListRef.current)
      cardListRef.current.style.transform = `translateX(${initialNum}px)`;
    const dotElem = document.getElementById(`dot_${1}`);
    if (dotElem) {
      dotElem.style.backgroundColor = `${Color.GRAY}`;
    }
  }, []);

  const handleLeft = () => {
    if (cardListRef.current) {
      if (initialNum === -900) {
        cardListRef.current.style.transform = `translateX(${
          initialNum + 900
        }px)`;
        setTimeout(() => {
          initialNum -= 4500;
          const dotNum = Math.abs(initialNum) / 900;
          for (let i = 1; i <= dummyData.length; i++) {
            const elem = document.getElementById(`dot_${i}`);
            if (i === dotNum && elem) {
              elem.style.backgroundColor = `${Color.GRAY}`;
            } else if (i !== dotNum && elem) {
              elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
            }
          }
          if (cardListRef.current) {
            cardListRef.current.style.transitionDuration = '0ms';
            cardListRef.current.style.transform = `translateX(${initialNum}px)`;
          }
        }, 500);
      }
      initialNum += 900;
      cardListRef.current.style.transform = `translateX(${initialNum}px)`;
      cardListRef.current.style.transitionDuration = '500ms';
      const dotNum = Math.abs(initialNum) / 900;
      for (let i = 1; i <= dummyData.length; i++) {
        const elem = document.getElementById(`dot_${i}`);
        if (i === dotNum && elem) {
          elem.style.backgroundColor = `${Color.GRAY}`;
        } else if (i !== dotNum && elem) {
          elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
        }
      }
    }
  };

  const handleRight = () => {
    if (cardListRef.current) {
      if (initialNum === -4500) {
        cardListRef.current.style.transform = `translateX(${
          initialNum - 900
        }px)`;
        setTimeout(() => {
          initialNum += 4500;
          const dotNum = Math.abs(initialNum) / 900;
          for (let i = 1; i <= dummyData.length; i++) {
            const elem = document.getElementById(`dot_${i}`);
            if (i === dotNum && elem) {
              elem.style.backgroundColor = `${Color.GRAY}`;
            } else if (i !== dotNum && elem) {
              elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
            }
          }
          if (cardListRef.current) {
            cardListRef.current.style.transitionDuration = '0ms';
            cardListRef.current.style.transform = `translateX(${initialNum}px)`;
          }
        }, 500);
      }
      initialNum -= 900;
      cardListRef.current.style.transform = `translateX(${initialNum}px)`;
      cardListRef.current.style.transitionDuration = '500ms';
      const dotNum = Math.abs(initialNum) / 900;
      for (let i = 1; i <= dummyData.length; i++) {
        const elem = document.getElementById(`dot_${i}`);
        if (i === dotNum && elem) {
          elem.style.backgroundColor = `${Color.GRAY}`;
        } else if (i !== dotNum && elem) {
          elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
        }
      }
    }
  };

  const handleDot = (idx: number) => {
    for (let i = 1; i <= dummyData.length; i++) {
      const elem = document.getElementById(`dot_${i}`);
      if (i === idx && elem) {
        elem.style.backgroundColor = `${Color.GRAY}`;
        if (cardListRef.current) {
          cardListRef.current.style.transform = `translateX(${i * -900}px)`;
          cardListRef.current.style.transitionDuration = '500ms';
        }
      } else if (i !== idx && elem) {
        elem.style.backgroundColor = `${Color.LIGHTGRAY}`;
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <CarrouselDirection onClick={handleLeft} />
        <CardListWrapper>
          <CardListContainer ref={cardListRef} id="cardList">
            {copyDummyData.map((card) => (
              <Card key={`$cardList_${card.id}`} card={card} />
            ))}
          </CardListContainer>
        </CardListWrapper>
        <CarrouselDirection right onClick={handleRight} />
      </Container>
      <CarrouselDotList>
        {dummyData.map((el, idx) => (
          <CarrouselDot
            key={el.id}
            id={`dot_${idx + 1}`}
            onClick={() => handleDot(idx + 1)}
          />
        ))}
      </CarrouselDotList>
    </Wrapper>
  );
};

const Card = ({ card }: { card: FacilityInfo }): JSX.Element => {
  return (
    <CardContainer>
      <Info>
        <InfoTop>
          <Name>{card.name}</Name>
          <Like>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                width: '20px',
                height: '20px',
                marginRight: '6px',
                color: 'red',
              }}
            />
            {card.likeCount}
          </Like>
        </InfoTop>
        <InfoBottom>
          <span>{`${card.address} / ${card.phoneNumber}`}</span>
        </InfoBottom>
      </Info>
    </CardContainer>
  );
};

type CarrouselDirection = {
  right?: boolean;
  onClick: () => void;
};

const CarrouselDirection = ({
  right,
  onClick,
}: CarrouselDirection): JSX.Element => {
  if (right)
    return (
      <Icon
        icon={faChevronRight}
        style={{ marginLeft: '40px' }}
        onClick={onClick}
      />
    );
  return (
    <Icon
      icon={faChevronLeft}
      style={{ marginRight: '40px' }}
      onClick={onClick}
    />
  );
};

// *************** <Carrousel>
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
type IdxProps = {
  idxProps: number;
};
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
`;

const CardListContainer = styled.div`
  display: flex;
  width: 6300px; // 배열의 길이와 width를 받아서 곱한값을 넣어주면 됨
  height: 440px;
`;

// *************** <Card>
const CardContainer = styled.div`
  width: 900px;
  height: 440px;
  background-color: ${Color.LIGHTGRAY};
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

const InfoBottom = styled.div``;

// *************** <CarrouselDirection>

const Icon = styled(FontAwesomeIcon)`
  color: ${Color.LIGHTGRAY};
  font-size: 30px;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

export default Carrousel;

// ************** <Type>

type FacilityInfo = {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  imageUrl: string;
  likeCount: number;
};

type CardType = {
  cardList: FacilityInfo[];
};
