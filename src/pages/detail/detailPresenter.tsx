import React from 'react';
import Like from '../../components/commons/like';
import Tag from '../../components/commons/tag';
import {
  CommentSection,
  Comment,
  Container,
  Contents,
  Desc,
  Info,
  LikeWrapper,
  OtherInfo,
  Tags,
  Title,
} from './detailStyle';

interface DetailProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}

const DetailPresenter = ({ onKeyDown, inputRef }: DetailProps) => {
  return (
    <Container>
      <Title>같이 운동하실 분 구함</Title>
      <Contents>
        <Info>
          <Tags>
            <Tag label="축구" color="black" />
            <Tag label="서울" color="black" />
          </Tags>
          <LikeWrapper>
            <Like $isliked={true} />
            <span>12</span>
            <p>2022-04-09</p>
          </LikeWrapper>
        </Info>
        <Desc>
          동네축구부 회원님 모집합니다. 동네는 서울시 노원구 어쩌고 저쩌고
          주말에 만나서 공차실 분 연락주세여
        </Desc>
      </Contents>
      <OtherInfo>
        <h2>모집 인원</h2>
        <p>10명</p>
      </OtherInfo>
      <CommentSection>
        <h2>댓글</h2>
        <input
          type="text"
          placeholder="댓글을 작성해주세요."
          onKeyDown={(e) => onKeyDown(e)}
          ref={inputRef}
        />
        <Comment>
          <div>
            <img src="/assets/pingpong.png" alt="테스트이미지" />
            <p>이지수</p>
          </div>
          <p>내용어쩌고~~~~~~~~~~~</p>
        </Comment>
        <Comment>
          <div>
            <img src="/assets/pingpong.png" alt="테스트이미지" />
            <p>이지수</p>
          </div>
          <p>내용어쩌고~~~~~~~~~~~</p>
        </Comment>
        <Comment>
          <div>
            <img src="/assets/pingpong.png" alt="테스트이미지" />
            <p>이지수</p>
          </div>
          <p>내용어쩌고~~~~~~~~~~~</p>
        </Comment>
      </CommentSection>
    </Container>
  );
};

export default DetailPresenter;
