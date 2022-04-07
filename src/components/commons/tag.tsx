import React from 'react';
import styled, { css } from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';
interface tagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color: string;
}

const Tag = ({ label, color, ...rest }: tagProps) => {
  return (
    <Wrapper color={color} {...rest}>
      <span>{label}</span>
    </Wrapper>
  );
};

export default Tag;
const Wrapper = styled.div`
  ${Font.BODY_2};
  ${({ color }) => {
    switch (color) {
      case 'black':
        return css`
          color: ${Color.BLACK};
          border: 1px solid ${Color.BLACK};
        `;
      case 'lightGray':
        return css`
          color: ${Color.LIGHTGRAY};
          border: 1px solid ${Color.LIGHTGRAY};
        `;

      default:
        break;
    }
  }}

  border-radius: 2.5rem;
  padding: 0.6rem 1rem;
  text-align: center;
  align-items: center;
  width: fit-content;
  span {
    vertical-align: middle;
  }
`;
