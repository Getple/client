import React, { useEffect, useRef, useState } from 'react';
import DetailPresenter from './detailPresenter';

const DetailContainer = () => {
  const [comment, setComment] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [user, setUser] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //1.user정보 setUser에 넣기 (댓글작성위해서)
    //2. 로그인한 user가 author인지 확인하고 setIsAuthor(true)
    //db에서 댓글 가져와서 화면에 뿌리기
  }, []);

  useEffect(() => {
    //comment와 작성자를 DB에 저장
  }, [comment]);

  const editPost = () => {
    //글수정
  };
  const deletePost = () => {
    //글삭제
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //작성한 댓글을 state에 저장
    if (e.key === 'Enter') {
      if (
        inputRef.current?.value === '' ||
        inputRef.current?.value === undefined
      )
        return;
      setComment(inputRef.current?.value);
    }
  };
  return (
    <DetailPresenter
      onKeyDown={onKeyDown}
      inputRef={inputRef}
      isAuthor={isAuthor}
      editPost={editPost}
      deletePost={deletePost}
    />
  );
};

export default DetailContainer;
