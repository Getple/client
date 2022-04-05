import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './searchModal';
import Color from '../../constant/palette';
import Font from '../../constant/fontStyle';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [sports, setSports] = useState<string | undefined>(undefined);
  const [count, setCount] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);

  type FilterType = 'calendar' | 'sports' | 'number';

  const handleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    filter: FilterType,
  ) => {
    // 달력이나 인원수클릭 시 접히는 현상 방지
    if (!modalRef?.current?.contains(e.target as Node)) {
      setIsModalOpen(!isModalOpen);
      setModalType(filter);
    }
  };

  const onSearch = () => {
    //리스트 페이지로 연결
  };

  return (
    <>
      <Container>
        <Item onClick={(e) => handleModal(e, 'calendar')}>
          <p>날짜</p>
          <span> {date ? date.toLocaleDateString() : '언제?'}</span>
          {isModalOpen && modalType === 'calendar' && (
            <div ref={modalRef}>
              <Modal
                modalType={modalType}
                setDate={setDate}
                setSports={setSports}
                count={count}
                setCount={setCount}
              />
            </div>
          )}
        </Item>
        <Item onClick={(e) => handleModal(e, 'sports')}>
          <p>종목</p>
          <span>{sports ? sports : '어떤 운동을 하시나요?'}</span>
          {isModalOpen && modalType === 'sports' && (
            <div ref={modalRef}>
              <Modal
                modalType={modalType}
                setDate={setDate}
                setSports={setSports}
                count={count}
                setCount={setCount}
              />
            </div>
          )}
        </Item>
        <Item onClick={(e) => handleModal(e, 'number')}>
          <p>인원</p>
          <span>{count ? `${count}명` : '몇명이신가요?'}</span>
          {isModalOpen && modalType === 'number' && (
            <div ref={modalRef}>
              <Modal
                modalType={modalType}
                setDate={setDate}
                setSports={setSports}
                count={count}
                setCount={setCount}
              />
            </div>
          )}
        </Item>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={onSearch} />
      </Container>
    </>
  );
};

export default Search;
const Container = styled.div`
  width: 42rem;
  margin: 8.5rem auto;
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
    margin-bottom: 4px;
  }
  span {
    color: ${Color.GRAY};
  }
  &:nth-of-type(2),
  &:nth-of-type(3) {
    border-left: 1px solid ${Color.LIGHTGRAY};
  }
`;
