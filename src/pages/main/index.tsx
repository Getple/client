import { useEffect, useState } from 'react';
import MainPresenter from './mainPresenter';

const Main = (): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const isLogined = localStorage.getItem('islogined');
    if (isLogined) setIsShow(!JSON.parse(isLogined));
  }, []);

  const handleModal = () => {
    setIsShow((prev) => !prev);
  };

  const handleBackground = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      setIsShow((prev) => !prev);
    }
  };

  return (
    <MainPresenter
      isShow={isShow}
      handleBackground={handleBackground}
      handleModal={handleModal}
    />
  );
};

export default Main;
