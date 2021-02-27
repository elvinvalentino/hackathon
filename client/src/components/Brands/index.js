import { Container } from '@material-ui/core';

import { Title, BrandsImg } from './components'
import BrandsImage from '../../assets/images/Brands.png'

const Brands = () => {
  return (
    <Container>
      <Title variant="overline" component="div">
        Organizations that trust us to make their clients schedule
      </Title>
      <BrandsImg src={BrandsImage} alt="brands" />
    </Container>
  )
}

export default Brands;