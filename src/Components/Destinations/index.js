import React from 'react'
import Title from '../Layout/Title/index.js';
import {Card, Category, Container,ContainerCard,Image,Text } from './style.js';

export default function Destinations() {
  return (
    <Container>
      <Title title="Check Out theses EPIC Destinations!"></Title>

      <ContainerCard>
          <Card>
              <Image src="/Imagens/img-1.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-2.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-3.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-4.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-5.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-6.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
          <Card>
              <Image src="/Imagens/img-7.jpg"></Image>
              <Category></Category>
              <Text>Loren Ipsun</Text>
          </Card>
      </ContainerCard>

    </Container>
  )
}
