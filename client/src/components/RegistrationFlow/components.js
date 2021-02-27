import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export const RegistrationFlowContainer = styled(Container)`
margin-top: 2em;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled(Typography)`
    font-weight: 600;
    text-align: center;
    margin-bottom: .3em;
`
export const SubTitle = styled(Typography)`
    text-align: center;
    margin-bottom: 2em;
`

export const RegistrationFlowImage = styled.img`
    margin-bottom: 6em;
`