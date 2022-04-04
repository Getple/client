import styled from 'styled-components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = (): JSX.Element => {
  return (
    <>
      <div>Main page</div>
      <FontAwesomeIcon icon={faCamera} />
    </>
  );
};

export default Main;
