import styled from 'styled-components';
import PageHeader from '../src/widgets/PageHeader/index';
import Carousel from '../src/Components/Carousel/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import Destinations from '../src/Components/Destinations';
import PageFooter from '../src/widgets/PageFooter/index';

const Title = styled.h1`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.secundary};
`;

export default function Home() {
  return (
    <div>
      <PageHeader></PageHeader>
      <Carousel></Carousel>
      <Destinations></Destinations>
      <PageFooter></PageFooter>
    </div>
  );
}
