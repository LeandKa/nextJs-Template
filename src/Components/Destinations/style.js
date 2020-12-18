import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content:center;
  margin-top: 3rem;
`;

export const ContainerCard = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  flex-wrap:wrap;
  margin:0px;
  padding:0px;
  width:100%;
`;

export const Card = styled.div`
  display: grid;
  width: 20%;
  height:70%;
  margin:10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  transition: 0.3s;
  grid-template-areas:
    'image image'
    'text text';
  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }  
`;
export const Image = styled.img`
  grid-area: image;
  border-radius: 5px 5px 0 0;
  width:100%;
`;
export const Category = styled.span``;
export const Text = styled.h2`
  grid-area: text;
  font-family:${({ theme }) => theme.fonts.font1};
  font-size:20px;
  text-align:center;
`;
