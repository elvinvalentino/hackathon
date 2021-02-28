import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { AuthenticationContainer, AuthenticationCard, CardTitle , AuthenticationGrid, AuthenticationInputContainer, AuthenticationInput, AuthenticationForm, SubmitButton} from './Register.component';

const Register = () => {
    return (
        <AuthenticationContainer>
            <AuthenticationCard>
                <CardTitle variant="h5" component="h1">Register Organization</CardTitle>
                <AuthenticationForm>
                    <AuthenticationInputContainer>
                        <AuthenticationGrid container spacing={1} alignItems="flex-end">
                        <AuthenticationGrid item>
                            <AccountCircle />
                        </AuthenticationGrid>
                        <AuthenticationGrid item>
                            <AuthenticationInput id="input-with-icon-grid" label="Username" />
                        </AuthenticationGrid>
                        </AuthenticationGrid>
                    </AuthenticationInputContainer>
                    <AuthenticationInputContainer>
                        <AuthenticationGrid container spacing={1} alignItems="flex-end">
                        <AuthenticationGrid item>
                            <AccountCircle />
                        </AuthenticationGrid>
                        <AuthenticationGrid item>
                            <AuthenticationInput id="input-with-icon-grid" label="Email" />
                        </AuthenticationGrid>
                        </AuthenticationGrid>
                    </AuthenticationInputContainer>
                    <AuthenticationInputContainer>
                        <AuthenticationGrid container spacing={1} alignItems="flex-end">
                        <AuthenticationGrid item>
                            <LockIcon />
                        </AuthenticationGrid>
                        <AuthenticationGrid item>
                            <AuthenticationInput id="input-with-icon-grid"  type="password" label="Password" />
                        </AuthenticationGrid>
                        </AuthenticationGrid>
                    </AuthenticationInputContainer>

                    <SubmitButton type="submit" variant="contained">
                        Login
                    </SubmitButton>
                    
                </AuthenticationForm>
            </AuthenticationCard>
        </AuthenticationContainer>
    )
}

export default Register;