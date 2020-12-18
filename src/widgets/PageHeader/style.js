import Image from 'next/image'
import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  background:  ${({ theme }) => theme.colors.background};
`;

export const Wrap = styled.div`
  margin-top:0.5rem;
  margin-left:2rem;
  height:100%;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secundary};
`;

export const ImageStyled = styled(Image)`
   
`

export const Ul = styled.ul`
  width:70%;
  display: grid;
  margin-top:2rem;
  grid-template-columns: repeat(4, auto);
  @media(max-width:800px){
    display:none;
  }
`;

export const Li = styled.li`
  list-style: none;
  text-decoration: none;
`;

export const StyleLink = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.font1};
  color: ${({ theme }) => theme.colors.white};
  &:hover{
    text-decoration:none;
  }
`;
