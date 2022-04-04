import React from 'react';
import CalendarModal from './calendar';
import SportsType from './sportsType';

type ModalParams = {
  modalType: String | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setSports: React.Dispatch<React.SetStateAction<String | undefined>>;
};
const Modal = ({ modalType, setDate, setSports }: ModalParams) => {
  return (
    <div>
      {modalType === 'calendar' && <CalendarModal setDate={setDate} />}
      {modalType === 'sports' && <SportsType setSports={setSports} />}
    </div>
  );
};

export default Modal;
