import React, { useState } from 'react';
import Modal from '../modal';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import {
  FlexContainer,
  HeaderContainer,
  LoginButton,
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
    <HeaderContainer>
      <FlexContainer>
        <Logo type="header" />
        <LoginButton onClick={handleModal}>로그인</LoginButton>
      </FlexContainer>
      {isShow && (
        <Modal
          handleBackground={handleBackground}
          handleModal={handleModal}
          title="로그인"
        >
          <KakaoButton>
            <CommentIcon icon={faComment} />
            <span>카카오 로그인</span>
          </KakaoButton>
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
    </HeaderContainer>
  );
};

export default Header;
