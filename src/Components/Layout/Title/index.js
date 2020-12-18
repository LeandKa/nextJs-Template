import React from 'react';
import { Children } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.font1};
  text-align: center;
  font-size: 35px;
`;

export default function Title({...props}) {
  return <H1>{props.title}</H1>;
}
