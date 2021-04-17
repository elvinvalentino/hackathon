import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/actions/auth';
import {
    AuthenticationContainer,
    AuthenticationCard,
    CardTitle,
    AuthenticationGrid,
    AuthenticationInputContainer,
    AuthenticationInput,
    AuthenticationForm,
    SubmitButton
} from './components';
import { useForm } from '../../hooks';

const Authentication = () => {
    const dispatch = useDispatch();
    const { data, handleOnChange, handleOnSubmit } = useForm({
        email: '',
        password: ''
    }, () => dispatch(login(data)))




    return (
        <AuthenticationContainer>
            <AuthenticationCard>
                <CardTitle variant="h4" component="h1">Login</CardTitle>
                <form onSubmit={handleOnSubmit}>
                    <AuthenticationForm>
                        <AuthenticationInputContainer>
                            <AuthenticationGrid container spacing={1} alignItems="flex-end">
                                <AuthenticationGrid item>
                                    <AccountCircle />
                                </AuthenticationGrid>
                                <AuthenticationGrid item>
                                    <AuthenticationInput id="input-with-icon-grid" label="Email" onChange={handleOnChange} name="email" />
                                </AuthenticationGrid>
                            </AuthenticationGrid>
                        </AuthenticationInputContainer>
                        <AuthenticationInputContainer>
                            <AuthenticationGrid container spacing={1} alignItems="flex-end">
                                <AuthenticationGrid item>
                                    <LockIcon />
                                </AuthenticationGrid>
                                <AuthenticationGrid item>
                                    <AuthenticationInput id="input-with-icon-grid" type="password" label="Password" onChange={handleOnChange} name="password" />
                                </AuthenticationGrid>
                            </AuthenticationGrid>
                        </AuthenticationInputContainer>

                        <SubmitButton type="submit" variant="contained">
                            Login
                    </SubmitButton>

                    </AuthenticationForm>
                </form>

            </AuthenticationCard>
        </AuthenticationContainer>
    )
}

export default Authentication;