import React, { useEffect, useRef, useState } from 'react';
import DetailPresenter from './detailPresenter';

const DetailContainer = () => {
  const [comment, setComment] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //comment를 DB에 저장
  }, [comment]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (inputRef.current?.value === '') return;
      setComment(inputRef.current?.value);
    }
  };
  return <DetailPresenter onKeyDown={onKeyDown} inputRef={inputRef} />;
};

export default DetailContainer;
