import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Color from '../../constant/palette';

type CalendarModarParams = {
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

const CalendarModal = ({ setDate }: CalendarModarParams) => {
  const onChange = (e: any) => {
    setDate(e);
  };

  const formatDate = (date: Date) => {
    const formatedDate = date.getDate().toLocaleString();
    return formatedDate;
  };

  return (
    <Wrapper>
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => formatDate(date)}
      />
    </Wrapper>
  );
};

export default CalendarModal;

const Wrapper = styled.div`
  .react-calendar {
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 6px 0 ${Color.GRAY};
    width: 15.6rem;
  }

  .react-calendar__tile {
    color: ${Color.GRAY};

    border-radius: 50%;
  }

  .react-calendar__tile:hover,
  .react-calendar__tile--active {
    background-color: ${Color.HOVER};
    color: ${Color.BLACK};
  }

  .react-calendar__tile--now {
    background-color: transparent;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${Color.HOVER};
    color: ${Color.BLACK};
  }
`;
