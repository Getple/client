import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
