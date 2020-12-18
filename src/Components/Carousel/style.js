import styled from 'styled-components';

export const Wrap = styled.div`
  background-image:url(${({ theme }) => theme.img.Image1});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  display:flex;
  width:100%;
  height:90vh;
  flex-direction:column;
`

export const WrapContainer = styled.div`
display: grid;
width:100%;
grid-gap:1.3rem;
justify-content:center;
align-self: center;
padding: 8.0rem;
grid-template-areas:
  'text text'
  'subText subText'
  ' form  form';
`;

export const H1 = styled.h1`
  grid-area: text;
  font-family: ${({ theme }) => theme.fonts.font1};
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

export const H2 = styled.h2`
  grid-area: subText;
  font-family: ${({ theme }) => theme.fonts.font1};
  text-align: center;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Form = styled.div`
  grid-area:form;
  display:flex;
  flex-direction:row;
  width:100%;
  justify-content:center;
`

export const Started = styled.button`
  border: 2px solid white;
  border-radius: 2%;
  padding: 1.0rem;
  width:70%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.font1};
  font-size: 1.0rem;
  &:hover{
    color:white;
    background:black;
  }
  &:focus {
    outline: none;
  }
`;

export const Watch = styled.button`
  border: 2px solid white;
  background: none;
  width:50%;
  font-family: ${({ theme }) => theme.fonts.font1};
  font-size: 1.3rem;
  cursor:pointer;
  border-left:none;
  color: white;
  padding: 1.0rem;
  border-radius: 2%;
  &:hover{
     color:black;
  }
  &:focus{
    outline:none;
  }
`;