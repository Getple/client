import Search from '../../components/search';
import styled from 'styled-components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header';

const Main = (): JSX.Element => {
  return (
    <>
      <div>Main page</div>
      <Search />
      <FontAwesomeIcon icon={faCamera} />
    </>
  );
};

export default Main;
