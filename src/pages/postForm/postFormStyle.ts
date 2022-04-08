import styled from 'styled-components';
import Font from '../../constant/fontStyle';
import Color from '../../constant/palette';

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 50rem;
  width: 100%;
`;

const Title = styled.p`
  ${Font.HEAD_1}
  text-align: center;
  margin: 5rem 0;
`;

const Label = styled.p`
  ${Font.HEAD_2}
  margin:0.625rem 0;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
  ${Font.BODY_2}
  :focus {
    outline: none;
    border: 1px solid #000;
  }
`;

const SelectBox = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 4px;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  ${Font.BODY_2}
  cursor: pointer;
  :focus {
    outline: none;
    border: 1px solid #000;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 15rem;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 4px;
  resize: none;
  padding: 0.5rem;
  ${Font.BODY_2}
  :focus {
    outline: none;
    border: 1px solid #000;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 3rem;
  margin: 2rem 0;
  border: 1px solid ${Color.LIGHTGRAY};
  border-radius: 4px;
  background-color: ${Color.WHITE};
  ${Font.SUBTITLE_2}
  :hover {
    color: ${Color.WHITE};
    background-color: ${Color.DARKGRAY};
  }
`;

export {
  ContainerWrapper,
  Container,
  Title,
  Label,
  Input,
  SelectBox,
  Textarea,
  SubmitButton,
};
