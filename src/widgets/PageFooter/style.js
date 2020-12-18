import Image from 'next/image';
import styled from 'styled-components';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  justify-content: center;
`;

export const Subscriber = styled.div`
  display: grid;
  width:100%;
  grid-gap:1.3rem;
  justify-content:center;
  align-self: center;
  padding: 2rem;
  grid-template-areas:
    'text text'
    'subText subText'
    ' form  form';
`;

export const H1 = styled.h1`
  grid-area: text;
  font-family: ${({ theme }) => theme.fonts.font1};
  text-align: center;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
`;

export const H2 = styled.h2`
  grid-area: subText;
  font-family: ${({ theme }) => theme.fonts.font1};
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.div`
  grid-area:form;
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content:center;
`

export const Started = styled.input`
  border: 2px solid white;
  border-radius: 2%;
  padding: 1rem;
  width:30%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.font1};
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`;

export const Watch = styled.button`
  border: 2px solid white;
  background: none;
  width:30%;
  font-family: ${({ theme }) => theme.fonts.font1};
  font-size: 1.3rem;
  cursor:pointer;
  border-left:none;
  color: white;
  padding: 1rem;
  border-radius: 2%;
  &:hover{
     color:black;
  }
  &:focus{
    outline:none;
  }
`;

export const Options = styled.div`
  display: grid;
  grid-gap:2.0rem;
  justify-content:space-around;
  align-self:center;
  grid-template-columns: repeat(4, auto);
  width: 100%;
  @media(max-width:800px){
    grid-template-columns: repeat(2, auto);
  }
`;

export const UL = styled.ul`
  text-align: center;
  padding: 1.4rem;
  margin: 0;
  width: 40%;
`;
export const LiHeader = styled.li`
  list-style: none;
  font-family: ${({ theme }) => theme.fonts.font1};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.9rem;
`;
export const Li = styled.li`
  list-style: none;
  padding: 0.4rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.font1};
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.0rem;
  justify-content: space-around;
`;

export const Wrap = styled.div`
  margin-top: 1.0rem;
  height: 100%;
`;

export const ImageStyled = styled(Image)`
  
`;

export const Copyright = styled.span`
  margin-top: 3rem;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrapSocial = styled.div`
  margin-top: 2.5rem;
`;

export const A = styled.a`
  margin:0.5rem;
  padding: 0;
`;

export const Linke = styled(FaLinkedin)`
  color: white;
  width: 30px;
  height: 30px;
`;

export const Whats = styled(FaWhatsapp)`
  color: white;
  width: 30px;
  height: 30px;
`;
