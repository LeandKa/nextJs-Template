import React from 'react';
import { Container, ContainerText,Titulo,StyleLink } from './style.js';
import Link from 'next/link';

export default function SidePages({ Title, Image, LinkProps }) {
  return (
    <Container Image={Image}>
      <ContainerText>
        <Titulo>{Title}</Titulo>
        <Link href={LinkProps} passHref>
           <StyleLink>Back</StyleLink>
        </Link>
      </ContainerText>
    </Container>
  );
}
