import React from 'react';
import CalendarModal from './calendar';
import SportsType from './sportsType';
import styled, { css } from 'styled-components';

type ModalParams = {
  modalType: String | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSports: React.Dispatch<React.SetStateAction<String | undefined>>;
};

interface ModalProps {
  modalType: String | undefined;
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
          <SportsType setSports={setSports} />
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
