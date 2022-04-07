import React, { useState } from 'react';
import Modal from '../loginModal';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContainer,
  ButtonBox,
  HeaderButton,
  KakaoButton,
  CommentIcon,
} from './headerStyle';
import Logo from '../logo';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const handleModal = () => {
    setIsShow(!isShow);
  };

  const handleBackground = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsShow(!isShow);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Logo type="header" />
        <ButtonBox>
          <HeaderButton onClick={handleModal}>모임 만들기</HeaderButton>
          <HeaderButton onClick={handleModal}>로그인</HeaderButton>
        </ButtonBox>
      </HeaderContainer>
      {isShow && (
        <Modal
          handleBackground={handleBackground}
          handleModal={handleModal}
          title="로그인"
        >
          <a
            href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_CALLBACK}&response_type=code`}
          >
            <KakaoButton>
              <CommentIcon icon={faComment} />
              <span>카카오 로그인</span>
            </KakaoButton>
          </a>
          {/* <AccountButton>
                <CommentIcon icon={faUser} />
                <span>사용자 계정</span>
              </AccountButton>
              <AccountButton>
                <CommentIcon icon={faUserTie} />
                <span>사장님 계정</span>
              </AccountButton> */}
          {/* <RunIcon icon={faPersonRunning} size="4x" />
              <Message>이제부터 GETPLE과 함께 하세요</Message> */}
        </Modal>
      )}
    </>
  );
};

export default Header;
