import Container from '@material-ui/core/Container';
import { ScheduleContainer, Title } from './Schedule.components';
import ScheduleCard from '../../components/ScheduleCard';

const Schedule = () => {
  return (
    <ScheduleContainer>
      <Container>
        <Title variant="h4" component="h1">
          Available Schedule
        </Title>
        <ScheduleCard />
      </Container>
    </ScheduleContainer>
  )
}

export default Schedule;