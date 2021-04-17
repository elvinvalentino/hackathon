import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'

import Typography from '@material-ui/core/Typography';

import { theme } from '../../theme';

export const AuthenticationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 91vh;
`

export const AuthenticationCard = styled.div`
    width: 400px;
    min-height: 500px;
    border-radius: 1em;

    box-shadow: 0 4px 7px rgb(0 0 0 / 10%);
    margin-top: 4em;
`

export const CardTitle = styled(Typography)`
    color: ${theme.color.primary};
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    padding: 1.8em;
`

export const AuthenticationGrid = styled(Grid)`
    color: ${theme.color.primary};
`

export const AuthenticationInputContainer = styled.div`
    margin-bottom: 2em;
`

export const AuthenticationForm = styled(FormControl)`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const AuthenticationInput = styled(TextField)`
    &:focus {
        background-color: red;
    }
`

export const SubmitButton = styled(Button)`
    color: white;
    background: ${theme.color.primary};
    margin: 3.8em;
`