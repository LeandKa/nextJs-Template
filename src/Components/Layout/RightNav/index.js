import React from 'react';
import { Ul } from './style.js';
import Link from 'next/link';

export default function RightNav({ open }) {
  return (
    <Ul open={open}>
      <Link href="/" passHref>
        <a>Home</a>
      </Link>
      <Link href="/" passHref>
        <a>About us</a>
      </Link>
      <Link href="/" passHref>
        <a>Contact Us</a>
      </Link>
      <Link href="/" passHref>
        <a>Travels</a>
      </Link>
    </Ul>
  );
}
