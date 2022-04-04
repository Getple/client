import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Font from '../constant/fontStyle';
import Color from '../constant/palette';

interface ModalProps {
  handleBackground: (e: React.MouseEvent<HTMLElement>) => void;
  handleModal: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { handleBackground, handleModal, title, children } = props;
  return (
    <Background onClick={handleBackground}>
      <ModalWrapper>
        <CloseButton onClick={handleModal}>
          <FontAwesomeIcon icon={faX} />
        </CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  padding: 30px;
  background-color: white;
  position: relative;
  z-index: 10;
  border-radius: 8px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: ${Color.LIGHTGRAY};
  :hover {
    color: ${Color.BLACK};
  }
`;

const ModalTitle = styled.p`
  ${Font.HEAD_2}
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

// const KakaoButton = styled.button`
//   position: relative;
//   width: 300px;
//   height: 50px;
//   padding: 15px 20px;
//   border: none;
//   border-radius: 8px;
//   color: ${Color.BROWN};
//   background-color: ${Color.YELLOW};
//   :hover {
//     color: ${Color.WHITE};
//     background-color: ${Color.BROWN};
//   }
//   span {
//     ${Font.SUBTITLE_2}
//   }
// `;

// const AccountButton = styled.button`
//   position: relative;
//   width: 300px;
//   height: 50px;
//   padding: 15px 20px;
//   border: 1px solid ${Color.LIGHTGRAY};
//   border-radius: 8px;
//   background-color: ${Color.WHITE};
//   :first-child {
//     margin-bottom: 20px;
//   }
//   :hover {
//     color: ${Color.WHITE};
//     background-color: ${Color.BLACK};
//     border: 1px solid ${Color.BLACK};
//   }
//   span {
//     ${Font.SUBTITLE_3}
//   }
// `;

// const CommentIcon = styled(FontAwesomeIcon)`
//   position: absolute;
//   left: 20px;
//   font-size: 20px;
// `;

// const RunIcon = styled(FontAwesomeIcon)`
//   margin-bottom: 30px;
// `;

// const Message = styled.p`
//   color: ${Color.GRAY};
//   ${Font.SUBTITLE_2}
// `;
