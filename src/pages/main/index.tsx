import Carrousel from '../../components/carrousel';
import { dummyData1 } from '../../components/carrousel/dummyData/dummyData1';
import Search from '../../components/search';

const Main = (): JSX.Element => {
  return (
    <>
      <Search />
      <Carrousel array={dummyData1} />
    </>
  );
};

export default Main;
