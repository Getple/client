import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
