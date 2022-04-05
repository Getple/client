import React from 'react';
import CalendarModal from './calendar';
import SportsModal from './sportsModal';
import styled from 'styled-components';
import CountModal from './count';

type ModalParams = {
  modalType: string | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSports: React.Dispatch<React.SetStateAction<string | undefined>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

interface ModalProps {
  modalType: string | undefined;
}

const Modal = ({
  modalType,
  setDate,
  setSports,
  count,
  setCount,
}: ModalParams) => {
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
          <CountModal count={count} setCount={setCount} />
        </div>
      )}
    </Container>
  );
};

export default Modal;

const Container = styled.div<ModalProps>`
  position: relative;
  z-index: 10;
  .modal {
    margin-top: 1.2rem;
    position: absolute;
  }
`;
