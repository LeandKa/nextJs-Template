import React from 'react'
import PageHeader from '../src/widgets/PageHeader';
import PageFooter from '../src/widgets/PageFooter'
import SidePages from '../src/Components/SidePages';

export default function about() {
  return (
    <div>
      <PageHeader></PageHeader>
      <SidePages Title="About Us" Image="/Imagens/img-6.jpg" LinkProps="/"></SidePages>
      <PageFooter></PageFooter>
    </div>
  )
}
