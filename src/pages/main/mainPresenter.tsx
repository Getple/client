import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Carrousel from '../../components/carrousel';
import Modal from '../../components/loginModal';
import Search from '../../components/search';
import { dummyData1 } from '../../components/carrousel/dummyData/dummyData1';
import { AccountButton, CommentIcon, Container } from './mainStyle';

interface MainPresenterParams {
  isShow: boolean;
  handleBackground: (e: React.MouseEvent<HTMLElement>) => void;
  handleModal: () => void;
}

const MainPresenter = (props: MainPresenterParams) => {
  return (
    <Container>
      <Search />
      <Carrousel array={dummyData1} />
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
