import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../commons/dropdown';
import Tag from '../commons/tag';
import Sports from './sports';
const Filter = () => {
  const [isShow, setIsShow] = useState(false);
  const [selectedMenu, setSeletctedMenu] = useState<string>('');
  const LOCATION = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '대전광역시',
    '울산광역시',
    '세종특별자치시',
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
  ];
  useEffect(() => {
    setIsShow(!isShow);
  }, [selectedMenu]);
  return (
    <Container>
      <Sports />
      <Tags>
        <Tag
          label={selectedMenu ? selectedMenu : '위치'}
          color={'black'}
          onClick={() => setIsShow(!isShow)}
        />
        <Tag label={'최신순'} color={'black'} />
        <Tag label={'인기순'} color={'black'} />
      </Tags>
      <DropdownWrapper>
        {isShow && (
          <Dropdown menuList={LOCATION} setSeletctedMenu={setSeletctedMenu} />
        )}
      </DropdownWrapper>
    </Container>
  );
};
export default Filter;
const Container = styled.div``;
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 3.375rem;
  div {
    margin-right: 1.25rem;
    cursor: pointer;
  }
`;
const DropdownWrapper = styled.div`
  margin-left: 3.375rem;
`;
