import React from 'react';
import styled from 'styled-components';
import Color from '../../constant/palette';

type SportsTypeParams = {
  setSports: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SportsType = ({ setSports }: SportsTypeParams) => {
  const sportsTypes = [
    '축구',
    '풋살',
    '야구',
    '농구',
    '탁구',
    '배드민턴',
    '테니스',
  ];
  return (
    <SportsList>
      {sportsTypes.map((el) => (
        <li key={el} onClick={() => setSports(el)}>
          {el}
        </li>
      ))}
    </SportsList>
  );
};

const SportsList = styled.ul`
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 ${Color.LIGHTGRAY};
  padding: 0.25rem 0;
  width: 12.5rem;
  background-color: ${Color.WHITE};
  li {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  li:hover {
    background-color: ${Color.HOVER};
  }
`;
export default SportsType;
