import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { PostType } from '.';
import Font from '../../../constant/fontStyle';
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
      <Row>
        <Tag label={props.card.event} color="black" marginRight="0.5625rem" />

        <Tag label={props.card.region} color="black" marginRight="1.5rem" />

        <Row>
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              width: '1.25rem',
              height: '1,25rem',
              marginRight: '0.625rem',
              color: 'red',
            }}
          />
          <Like>10</Like>
        </Row>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 16.125rem;
  height: 16.375rem;
  padding: 1.875rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6.9px;
  box-shadow: 1px 0px 10px 1px lightgray;
  margin: 0 auto;
  margin-bottom: 1.875rem;
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

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Like = styled.p`
  ${Font.BODY_2}
`;

export default Card;
