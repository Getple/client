import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardContainer, Info, InfoTop, Like, Name } from './styles/cardStyle';
import { FacilityInfo } from './type';

interface CardParams {
  card: FacilityInfo;
}

const Card = (props: CardParams) => {
  return (
    <CardContainer image={props.card.imageUrl}>
      <Info>
        <InfoTop>
          <Name>{props.card.name}</Name>
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
            {props.card.likeCount}
          </Like>
        </InfoTop>
        <span>{`${props.card.address} / ${props.card.phoneNumber}`}</span>
      </Info>
    </CardContainer>
  );
};

export default Card;
