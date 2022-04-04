import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './searchModal';
import Color from '../../constant/palette';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<String | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [sports, setSports] = useState<String | undefined>(undefined);

  const handleModal = (selectedFilter: string) => {
    setIsModalOpen(!isModalOpen);
    setModalType(selectedFilter);
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
    font-weight: bold;
  }
  span {
    color: ${Color.GRAY};
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    border-left: 1px solid ${Color.LIGHTGRAY};
  }
`;
