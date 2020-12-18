import React from 'react';
import PageHeader from '../src/widgets/PageHeader';
import PageFooter from '../src/widgets/PageFooter'
import SidePages from '../src/Components/SidePages';

export default function travel() {
  return (
    <div>
      <PageHeader></PageHeader>
      <SidePages Title="Good Travel" Image="/Imagens/img-3.jpg" LinkProps="/"></SidePages>
      <PageFooter></PageFooter>
    </div>
  )
}
