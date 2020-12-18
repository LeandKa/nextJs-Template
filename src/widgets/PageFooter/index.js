import React from 'react';
import {
  Container,
  Options,
  Social,
  Subscriber,
  H1,
  H2,
  Started,
  Watch,
  UL,
  Li,
  LiHeader,
  Wrap,
  ImageStyled,
  Copyright,
  WrapSocial,
  Linke,
  A,
  Whats,
  Form,
} from './style.js';

export default function index() {
  return (
    <Container>
      <Subscriber>
        <H1>
          Join the Adventure newsletter to receive our best vacation deals
        </H1>
        <H2>You can unsubscribe at any time</H2>
        <Form>
          <Started placeholder="Your Email here"></Started>
          <Watch>Subscriber</Watch>
        </Form>
      </Subscriber>
      <Options>
        <UL>
          <LiHeader>Title</LiHeader>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
        </UL>
        <UL>
          <LiHeader>Title</LiHeader>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
        </UL>
        <UL>
          <LiHeader>Title</LiHeader>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
        </UL>
        <UL>
          <LiHeader>Title</LiHeader>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
          <Li>Option1</Li>
        </UL>
      </Options>
      <Social>
        <Wrap>
          <ImageStyled
            src="/Logo/react.png"
            alt="logo"
            height="60"
            width="100"
          ></ImageStyled>
        </Wrap>
        <Copyright>React@Ltda</Copyright>
        <WrapSocial>
          <A href="https://www.linkedin.com/in/leandro-pereira-8a3a0592/">
            <Linke></Linke>
          </A>
          <A href="https://api.whatsapp.com/send?phone=5521982045984">
            <Whats></Whats>
          </A>
        </WrapSocial>
      </Social>
    </Container>
  );
}
