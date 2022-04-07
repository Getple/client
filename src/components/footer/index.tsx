import React from 'react';
import Logo from '../logo';
import {
  FooterContainer,
  FooterItem,
  TopContainer,
  TopItemsColumn,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <TopContainer>
          <Logo type="footer" />
          <TopItemsColumn>
            <span>About us</span>
            <ul>
              <li>
                <a href="https://github.com/Getple/client">Repository</a>
              </li>
              <li>
                <a href="https://github.com/Getple/client/wiki">Wiki</a>
              </li>
            </ul>
          </TopItemsColumn>
          <TopItemsColumn>
            <span>Developer</span>
            <ul>
              <li>
                <a href="https://github.com/zeromountain">손영산</a>
              </li>
              <li>
                <a href="https://github.com/BByungs">안병진</a>
              </li>
              <li>
                <a href="https://github.com/y-solb">윤솔비</a>
              </li>
              <li>
                <a href="https://github.com/mynameisjisoo">이지수</a>
              </li>
            </ul>
          </TopItemsColumn>
        </TopContainer>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
