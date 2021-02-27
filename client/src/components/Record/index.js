import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'

import { Title, SubTitle, RecordImage, RecordTitle, RecordSubTitle } from './components'
import fastAndReliable from '../../assets/images/fast-and-reliable.svg';
import verifiedVaccine from '../../assets/images/verified-vaccine.svg';
import trustedAdd from '../../assets/images/trusted-app.svg';

const Record = () => {
  return (
    <Container>
      <Title variant="h4" component="h1">
        Why Choose KERD?
      </Title>
      <SubTitle>
        we've had good record
      </SubTitle>
      <Grid container spacing={3} justify="center">
        <Grid container direction="column" item lg={4} md={6} sm={12} alignItems="center">
          <RecordImage src={verifiedVaccine} alt="record-svg" />
          <RecordTitle component="div">Verified Vaccine</RecordTitle>
          <RecordSubTitle>all vaccines have passed the feasibility test according to their respective countries </RecordSubTitle>
        </Grid>
        <Grid container direction="column" item lg={4} md={6} sm={12} alignItems="center">
          <RecordImage src={fastAndReliable} alt="record-svg" />
          <RecordTitle component="div">Fast & Reliable</RecordTitle>
          <RecordSubTitle>Our designs help patients create their schedules quickly and easily</RecordSubTitle>
        </Grid>
        <Grid container direction="column" item lg={4} md={12} alignItems="center">
          <RecordImage src={trustedAdd} alt="record-svg" />
          <RecordTitle component="div">Trusted App</RecordTitle>
          <RecordSubTitle>KERD has been trusted by companies around the world to manage their client schedules</RecordSubTitle>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Record;