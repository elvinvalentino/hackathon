import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const ContactContainer = styled.div`
    position: relative;
    background-color: #00A2A5;
    padding: 3.5em;
    color: #fff;
`

export const ContactTitle = styled(Typography)`
    font-weight: 600;
    margin-bottom: 0.2em;
    font-size: 2.5em;
`

export const ContactSubTitle = styled(Typography)`
    max-width: 300px;
`

export const ContactImage = styled.img`
    position: absolute;
    right: 15vw;
    bottom: -50px;

    @media(max-width: 960px) {
        display: none;
    }
`