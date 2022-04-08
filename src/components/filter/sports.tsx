import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Font from '../../constant/fontStyle';

const Sports = () => {
  const [selectedType, setSelectedType] = useState('');
  const sportsTypes = [
    { type: 'football', src: '/assets/football.png' },
    { type: 'baseball', src: '/assets/baseball.png' },
    { type: 'basketball', src: '/assets/basketball.png' },
    { type: 'pingpong', src: '/assets/pingpong.png' },
    { type: 'badminton', src: '/assets/badminton.png' },
    { type: 'tennis', src: '/assets/tennis.png' },
    { type: 'golf', src: '/assets/golf.png' },
  ];

  const onSelect = (type: string) => {
    if (selectedType === type) {
      setSelectedType('');
    } else {
      setSelectedType(type);
    }
  };

  return (
    <>
      <Container>
        {sportsTypes.map((el) => {
          return (
            <button
              key={el.type}
              onClick={() => onSelect(el.type)}
              className={el.type === selectedType ? 'selected' : ''}
            >
              <img src={el.src} alt="종목" />
            </button>
          );
        })}
        <div></div>
      </Container>
    </>
  );
};

export default Sports;

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4.625rem 0 2.5rem;

  div {
    margin-top: 1rem;
    width: 80%;
    height: 1.5px;
    background-color: lightgray;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    margin: 0 1rem;
  }
  img {
    width: 3.5rem;
    opacity: 55%;
    transition: all 200ms ease-in;
  }
  img:hover {
    opacity: 100;
  }

  .selected img {
    opacity: 100%;
  }
  p {
    margin-top: 0.5rem;
    ${Font.BODY_2}
  }

  @media screen and (min-width: 0px) and (max-width: 425px) {
    margin: 2rem 0;

    button {
      margin: 0.5rem;
    }
    img {
      width: 3rem;
    }

    div {
      width: 90%;
      margin-top: 0.5rem;
    }
  }
`;
