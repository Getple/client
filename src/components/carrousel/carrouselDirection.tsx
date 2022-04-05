import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Color from '../../constant/palette';

interface CarrouselDirectionParams {
  right?: boolean;
  onClick: () => void;
}

const CarrouselDirection = (props: CarrouselDirectionParams) => {
  if (props.right)
    return (
      <Icon
        icon={faChevronRight}
        style={{ marginLeft: '40px' }}
        onClick={props.onClick}
      />
    );
  return (
    <Icon
      icon={faChevronLeft}
      style={{ marginRight: '40px' }}
      onClick={props.onClick}
    />
  );
};

export default CarrouselDirection;

const Icon = styled(FontAwesomeIcon)`
  color: ${Color.LIGHTGRAY};
  font-size: 30px;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;
