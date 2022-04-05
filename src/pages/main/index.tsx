import Carrousel from '../../components/carrousel';
import { dummyData1 } from '../../components/carrousel/dummyData/dummyData1';
import Search from '../../components/search';
import styled from 'styled-components';

const Main = (): JSX.Element => {
  return (
    <Container>
      <Search />
      <Carrousel array={dummyData1} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1120px;
  height: calc(100vh - 300px - 64px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export default Main;
