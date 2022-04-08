import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';

export const Container = styled.div`
  margin: 3.25rem 0;
`;

export const Title = styled.h1`
  ${Font.HEAD_1}
`;
export const Contents = styled.div``;

export const Info = styled.div`
  margin: 2.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tags = styled.div`
  display: flex;
  height: min-content;
  div {
    margin-right: 1.25rem;
  }
`;

export const LikeWrapper = styled.div`
  text-align: right;
  ${Font.BODY_2};
  span {
    margin-left: 0.4rem;
  }
  p {
    margin-top: 0.5rem;
    color: ${Color.GRAY};
  }
`;
export const Desc = styled.p`
  ${Font.BODY_1}
  margin-bottom: 2.5rem;
`;

export const OtherInfo = styled.section`
  padding: 1.25rem 0;
  border-top: 1px solid ${Color.LIGHTGRAY};
  border-bottom: 1px solid ${Color.LIGHTGRAY};
  h2 {
    ${Font.HEAD_2}
    margin:1.25rem 0
  }
  p {
    ${Font.BODY_1}
  }
`;
export const CommentSection = styled.section`
  padding: 1.25rem 0;
  h2 {
    ${Font.HEAD_2}
    margin-bottom: 1.25rem;
  }
  input {
    width: 100%;
    padding: 1.375rem 1.25rem;
    ${Font.BODY_2}
    outline: none;
    border-radius: 0.5rem;
    box-shadow: 0 0 6px 0 ${Color.LIGHTGRAY};
    border: none;
  }
  input::placeholder {
    color: ${Color.GRAY};
  }
`;
export const Comment = styled.div`
  padding: 1.875rem 0;
  border-bottom: 1px solid ${Color.LIGHTGRAY};
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  img {
    width: 2.5rem;
    border-radius: 50%;
    margin-right: 1.25rem;
  }
  img + p {
    ${Font.SUBTITLE_3}
  }
  p {
    ${Font.BODY_2}
  }
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.LIGHTGRAY};
`;
