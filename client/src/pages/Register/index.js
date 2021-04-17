import { useDispatch } from 'react-redux';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
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
import { register } from '../../redux/actions/auth'

const Register = () => {
    const dispatch = useDispatch();

    const { data, handleOnChange, handleOnSubmit } = useForm({
        name: '',
        email: '',
        password: ''
    }, () => dispatch(register(data)))
    return (
        <AuthenticationContainer>
            <AuthenticationCard>
                <CardTitle variant="h5" component="h1">Register Organization</CardTitle>
                <form onSubmit={handleOnSubmit}>
                    <AuthenticationForm>
                        <AuthenticationInputContainer>
                            <AuthenticationGrid container spacing={1} alignItems="flex-end">
                                <AuthenticationGrid item>
                                    <AccountCircle />
                                </AuthenticationGrid>
                                <AuthenticationGrid item>
                                    <AuthenticationInput id="input-with-icon-grid" label="Name" name="name" onChange={handleOnChange} />
                                </AuthenticationGrid>
                            </AuthenticationGrid>
                        </AuthenticationInputContainer>
                        <AuthenticationInputContainer>
                            <AuthenticationGrid container spacing={1} alignItems="flex-end">
                                <AuthenticationGrid item>
                                    <AccountCircle />
                                </AuthenticationGrid>
                                <AuthenticationGrid item>
                                    <AuthenticationInput id="input-with-icon-grid" label="Email" name="email" onChange={handleOnChange} />
                                </AuthenticationGrid>
                            </AuthenticationGrid>
                        </AuthenticationInputContainer>
                        <AuthenticationInputContainer>
                            <AuthenticationGrid container spacing={1} alignItems="flex-end">
                                <AuthenticationGrid item>
                                    <LockIcon />
                                </AuthenticationGrid>
                                <AuthenticationGrid item>
                                    <AuthenticationInput id="input-with-icon-grid" type="password" label="Password" name="password" onChange={handleOnChange} />
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

export default Register;