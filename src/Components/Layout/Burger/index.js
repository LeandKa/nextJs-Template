import React, { useState } from 'react';
import { BurgerStyle } from './style.js';
import RightNav from '../RightNav/index.js';

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyle>
      <RightNav open={open}></RightNav>
    </>
  );
}
