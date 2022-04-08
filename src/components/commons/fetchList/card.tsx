import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { PostType } from '.';
import Font from '../../../constant/fontStyle';
import Color from '../../../constant/palette';
import Tag from '../tag';

interface CardProps {
  card: PostType;
}

const matchingImage = (event: string) => {
  if (event === '배드민턴') return '/assets/badminton.png';
  else if (event === '야구') return '/assets/baseball.png';
  else if (event === '농구') return '/assets/basketball.png';
  else if (event === '풋살') return '/assets/futsal.png';
  else if (event === '골프') return '/assets/golf.png';
  else if (event === '탁구') return '/assets/pingpong.png';
  else if (event === '축구') return '/assets/football.png';
  else return '/assets/tennis.png';
};

const Card = (props: CardProps) => {
  return (
    <Container>
      <Title>
        {props.card.title.length > 26
          ? `${props.card.title.slice(0, 26)}...`
          : props.card.title}
      </Title>
      <EventImage
        src={matchingImage(props.card.event)}
        alt={`${props.card.event}_image`}
      />
      <BottomBox>
        <Tag label={props.card.event} color="black" />
        <Tag label={props.card.region} color="black" />
        <Row>
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              width: '1.25rem',
              height: '1,25rem',
              marginRight: '0.5rem',
              color: 'red',
            }}
          />
          <Like>10</Like>
        </Row>
      </BottomBox>
    </Container>
  );
};

const Container = styled.div`
  width: 16rem;
  height: 16rem;
  padding: 1.875rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 1px 0px 10px 1px lightgray;
  margin: 0.375rem 0.5rem;
  background-color: ${Color.WHITE};
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    transition: all 0.2s linear;
  }
`;

const Title = styled.h2`
  ${Font.HEAD_2};
  text-align: center;
  height: 3.4375rem;
  margin-bottom: 0.8rem;
`;

const EventImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 1.875rem;
`;

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
`;

const Like = styled.p`
  ${Font.BODY_2}
`;

export default Card;
