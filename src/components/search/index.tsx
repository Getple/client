import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './searchModal';
import Color from '../../constant/palette';
import BODY_3 from '../../constant/fontStyle';
import Font from '../../constant/fontStyle';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [sports, setSports] = useState<string | undefined>(undefined);
  const [count, setCount] = useState(1);

  type FilterType = 'calendar' | 'sports' | 'number';
  const handleModal = (filter: FilterType) => {
    setIsModalOpen(!isModalOpen);
    setModalType(filter);
  };
  return (
    <>
      <Container>
        <Item onClick={() => handleModal('calendar')}>
          <p>날짜</p>
          <span>언제?</span>
          {isModalOpen && modalType === 'calendar' && (
            <Modal
              modalType={modalType}
              setDate={setDate}
              setSports={setSports}
              count={count}
              setCount={setCount}
            />
          )}
        </Item>
        <Item onClick={() => handleModal('sports')}>
          <p>종목</p>
          <span>어떤 운동을 하시나요?</span>
          {isModalOpen && modalType === 'sports' && (
            <Modal
              modalType={modalType}
              setDate={setDate}
              setSports={setSports}
              count={count}
              setCount={setCount}
            />
          )}
        </Item>
        <Item onClick={() => handleModal('number')}>
          <p>인원</p>
          <span>몇명이신가요?</span>
          {isModalOpen && modalType === 'number' && (
            <Modal
              modalType={modalType}
              setDate={setDate}
              setSports={setSports}
              count={count}
              setCount={setCount}
            />
          )}
        </Item>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Container>
    </>
  );
};

export default Search;
const Container = styled.div`
  display: flex;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 48px;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
  font-size: ${Font.BODY_3};
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;

const Item = styled.div`
  padding-left: 1.2rem;
  width: 100%;
  cursor: pointer;

  p {
    margin-bottom: 2px;
    font-size: ${Font.HEAD_3};
  }
  span {
    color: ${Color.GRAY};
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    border-left: 1px solid ${Color.LIGHTGRAY};
  }
`;
