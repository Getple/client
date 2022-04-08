import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Kakao from './pages/kakao';
import Main from './pages/main';
import styled from 'styled-components';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ContaienrWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth/kakao" element={<Kakao />} />
        </Routes>
      </ContaienrWrapper>
      <Footer />
    </BrowserRouter>
  );
}

const ContaienrWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: auto;
`;

export default App;
