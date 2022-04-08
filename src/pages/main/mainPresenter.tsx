import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Carrousel from '../../components/carrousel';
import Modal from '../../components/loginModal';
import Filter from '../../components/filter';
//import { dummyData1 } from '../../components/carrousel/dummyData/dummyData1';
import dummyData1 from '../../components/commons/fetchList/dummyData/dummyData1';
import { AccountButton, CommentIcon, Container } from './mainStyle';
import FetchList from '../../components/commons/fetchList';

interface MainPresenterParams {
  isShow: boolean;
  handleBackground: (e: React.MouseEvent<HTMLElement>) => void;
  handleModal: () => void;
}

const MainPresenter = (props: MainPresenterParams) => {
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
