import styled from 'styled-components';

export const Container = styled.div`
  background-image: url(${(props) => props.Image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Titulo = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.font1};
`;

export const StyleLink = styled.a`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.font1};
  color: ${({ theme }) => theme.colors.white};
  &:hover{
    text-decoration: none;
    color:blue;
  }
`;
