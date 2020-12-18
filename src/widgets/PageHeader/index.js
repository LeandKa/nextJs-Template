import React from 'react';
import Link from 'next/link';
import { Container, Ul, Li, StyleLink, ImageStyled, Wrap } from './style';
import Burger from '../../Components/Layout/Burger/index.js';

export default function PageHeader({ ...props }) {
  return (
    <Container>
      <Wrap>
        <ImageStyled
          src="/Logo/react.png"
          alt="logo"
          height="60"
          width="100"
        ></ImageStyled>
      </Wrap>
      <Ul>
      <Li>
          <Link href="/" passHref>
            <StyleLink>Home</StyleLink>
          </Link>
        </Li>
        <Li>
          <Link href="/about" passHref>
            <StyleLink>About Us</StyleLink>
          </Link>
        </Li>
        <Li>
          <Link href="/contact" passHref>
            <StyleLink>Contact Us</StyleLink>
          </Link>
        </Li>
        <Li>
          <Link href="/travel" passHref>
            <StyleLink>Travels</StyleLink>
          </Link>
        </Li>
      </Ul>
      <Burger></Burger>
    </Container>
  );
}
