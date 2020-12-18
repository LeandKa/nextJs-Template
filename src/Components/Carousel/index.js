import React from 'react';
import { Form, H1, H2, Started, Watch, Wrap, WrapContainer } from './style';

export default function Carousel() {
  return (
    <Wrap>
      <WrapContainer>
        <H1>ADVENTURE AWAITS</H1>
        <H2>What are you waiting for?</H2>
        <Form>
          <Started>GET STARTED</Started>
          <Watch>WATCH</Watch>
        </Form>
      </WrapContainer>
    </Wrap>
  );
}
