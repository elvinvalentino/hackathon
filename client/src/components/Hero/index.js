import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Headline, SubHeadline, HeroImage, HeroButton } from './components';
import image from '../../assets/images/heroIllustration.svg';

const Hero = () => {

  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Headline>
            Increase your immunity,
            <br />
            to reduce the risk of covid
          </Headline>
          <SubHeadline>
            KERD helps you to make a schedule with
            <br />
            government for getting vaccine.
          </SubHeadline>
          <HeroButton variant="contained">
            Get Your Schedule
          </HeroButton>
        </Grid>
        <Grid container item xs={12} sm={6} justify="flex-end">
          <HeroImage src={image} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Hero;