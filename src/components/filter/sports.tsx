import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Sports = () => {
  const [selectedType, setSelectedType] = useState('');
  const sportsTypes = [
    { type: 'football', src: '/assets/football.png' },
    { type: 'futsal', src: '/assets/futsal.png' },
    { type: 'baseball', src: '/assets/baseball.png' },
    { type: 'basketball', src: '/assets/basketball.png' },
    { type: 'pingpong', src: '/assets/pingpong.png' },
    { type: 'badminton', src: '/assets/badminton.png' },
    { type: 'tennis', src: '/assets/tennis.png' },
    { type: 'src', src: '/assets/golf.png' },
  ];

  useEffect(() => {});
  const onSelect = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: string,
  ) => {
    setSelectedType(type);
  };
  return (
    <Container>
      {sportsTypes.map((el) => {
        return (
          <button
            key={el.type}
            onClick={(e) => onSelect(e, el.type)}
            className={el.type === selectedType ? 'selected' : ''}
          >
            <img src={el.src} alt="종목" />
          </button>
        );
      })}
    </Container>
  );
};

export default Sports;

const Container = styled.ul`
  display: flex;
  justify-content: center;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 1rem;
  }
  img {
    width: 3.5rem;
  }
  .selected img {
    opacity: 50%;
  }
`;
