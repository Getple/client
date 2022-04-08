import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Color from '../../constant/palette';

interface LikeProps {
  isliked: boolean;
}

const Like = ({ isliked }: LikeProps) => {
  return <LikeIcon icon={faHeart} isliked={isliked} />;
};

const LikeIcon = styled(FontAwesomeIcon)<LikeProps>`
  color: ${(isLike) => (isLike ? Color.RED : Color.LIGHTGRAY)};
`;
export default Like;
