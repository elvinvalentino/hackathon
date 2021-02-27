import { RegistrationFlowContainer, Title, SubTitle, RegistrationFlowImage } from './components';
import registrationFlow from '../../assets/images/registrationFlow.svg'

const RegistrationFlow = () => {
  return (
    <RegistrationFlowContainer>
      <Title variant="h4" component="h1">Registration Flow</Title>
      <SubTitle>
        Step to make your schedule
      </SubTitle>
      <RegistrationFlowImage src={registrationFlow} />
    </RegistrationFlowContainer>
  )
}

export default RegistrationFlow;