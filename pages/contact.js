import React from 'react'
import PageHeader from '../src/widgets/PageHeader';
import PageFooter from '../src/widgets/PageFooter'
import SidePages from '../src/Components/SidePages';

export default function contact() {
  return (
    <div>
    <PageHeader></PageHeader>
    <SidePages Title="Contact Us" Image="/Imagens/img-8.jpg" LinkProps="/"></SidePages>
    <PageFooter></PageFooter>
  </div>
  )
}
