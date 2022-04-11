import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Carrousel from '../../components/carrousel';
import Modal from '../../components/loginModal';
import Filter from '../../components/filter';
//import { dummyData1 } from '../../components/carrousel/dummyData/dummyData1';
import dummyData1 from '../../components/commons/fetchList/dummyData/dummyData1';
import { AccountButton, CommentIcon, Container } from './mainStyle';
import FetchList from '../../components/commons/fetchList';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

interface MainPresenterProps {
  isShow: boolean;
  handleBackground: (e: React.MouseEvent<HTMLElement>) => void;
  handleModal: () => void;
}

const MainPresenter = (props: MainPresenterProps) => {
  const GET_CURRENT_USER = gql`
    query GetUserToken {
      token
    }
  `;

  const currentUser = useQuery<any>(GET_CURRENT_USER);
  console.log(currentUser);

  return (
    <Container>
      <Filter />
      <FetchList array={dummyData1} />
      {/* <Carrousel array={dummyData1} /> */}
      {props.isShow && (
        <Modal
          handleBackground={props.handleBackground}
          handleModal={props.handleModal}
          title="회원가입"
        >
          <AccountButton>
            <CommentIcon icon={faUser} />
            <span>사용자 계정</span>
          </AccountButton>
          <AccountButton>
            <CommentIcon icon={faUserTie} />
            <span>사장님 계정</span>
          </AccountButton>
        </Modal>
      )}
    </Container>
  );
};

export default MainPresenter;
