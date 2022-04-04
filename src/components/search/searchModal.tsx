import React from 'react';
import CalendarModal from './calendar';
import SportsModal from './sportsModal';
import styled from 'styled-components';
import CountModal from './count';

type ModalParams = {
  modalType: string | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSports: React.Dispatch<React.SetStateAction<string | undefined>>;
};

interface ModalProps {
  modalType: string | undefined;
}

const Modal = ({ modalType, setDate, setSports }: ModalParams) => {
  return (
    <Container modalType={modalType}>
      {modalType === 'calendar' && (
        <div className="modal">
          <CalendarModal setDate={setDate} />
        </div>
      )}
      {modalType === 'sports' && (
        <div className="modal">
          <SportsModal setSports={setSports} />
        </div>
      )}
      {modalType === 'number' && (
        <div className="modal">
          <CountModal />
        </div>
      )}
    </Container>
  );
};

export default Modal;

const Container = styled.div<ModalProps>`
  position: relative;
  .modal {
    margin-top: 1.5rem;
    position: absolute;
  }
`;
