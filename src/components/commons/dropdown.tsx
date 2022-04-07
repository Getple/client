import React from 'react';
import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';

type DropdownProps = {
  menuList: string[];
  setSeletctedMenu: React.Dispatch<React.SetStateAction<string>>;
};
const Dropdown = ({ menuList, setSeletctedMenu }: DropdownProps) => {
  return (
    <Container>
      {menuList.map((el) => (
        <li
          key={el}
          onClick={() => {
            setSeletctedMenu(el);
          }}
        >
          {el}
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  ${Font.BODY_2}
  width: max-content;
  border-radius: 8px;
  box-shadow: 0 0 6px 0 ${Color.LIGHTGRAY};
  padding: 0.25rem 0;
  margin-top: 2px;
  background-color: ${Color.WHITE};
  li {
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }

  li:hover {
    background-color: ${Color.HOVER};
  }
`;
export default Dropdown;
