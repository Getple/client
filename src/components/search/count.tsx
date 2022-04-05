import React from 'react';
import styled from 'styled-components';
import Color from '../../constant/palette';

type CounterModalParams = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CountModal = ({ count, setCount }: CounterModalParams) => {
  return (
    <Container>
      <button
        onClick={() => {
          setCount(count - 1 ? 0 : 1);
        }}
      >
        -
      </button>
      {count}명
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </Container>
  );
};

export default CountModal;
const Container = styled.div`
  width: 15.6rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 ${Color.LIGHTGRAY};
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 2.75rem;
  background-color: ${Color.WHITE};
  button {
    background-color: transparent;
    outline: none;
    border-radius: 50%;
    border: 1px solid ${Color.GRAY};
    color: ${Color.GRAY};
  }
`;
