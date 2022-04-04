import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<String | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [sports, setSports] = useState<String | undefined>(undefined);

  const handleModal = (selectedFilter: string) => {
    if (!selectedFilter) {
      setIsModalOpen(!isModalOpen);
    }
    setModalType(selectedFilter);
  };
  return (
    <>
      <Container>
        <Item onClick={() => handleModal('calendar')}>
          <p>날짜</p>
          <span>언제?</span>
        </Item>
        <Item onClick={() => handleModal('sports')}>
          <p>종목</p>
          <span>어떤 운동을 하시나요?</span>
        </Item>
        <Item onClick={() => handleModal('number')}>
          <p>인원</p>
          <span>몇명이신가요?</span>
        </Item>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Container>
      {isModalOpen && (
        <Modal modalType={modalType} setDate={setDate} setSports={setSports} />
      )}
    </>
  );
};

export default Search;
const Container = styled.div`
  display: flex;
  border: 1px solid gray;
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
  cursor: pointer;
  p {
    margin-bottom: 2px;
    font-weight: bold;
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    border-left: 1px gray solid;
  }
  width: 100%;
`;
