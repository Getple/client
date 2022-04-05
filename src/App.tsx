import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Kakao from './pages/kakao';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao" element={<Kakao />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
