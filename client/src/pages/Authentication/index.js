import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { AuthenticationContainer, AuthenticationCard, CardTitle , AuthenticationGrid, AuthenticationInputContainer, AuthenticationInput, AuthenticationForm, SubmitButton} from './Authentication.component';

import { theme } from '../../theme';

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <AuthenticationCard>
                <CardTitle variant="h4" component="h1">Login</CardTitle>
                <AuthenticationForm>
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

export default Authentication;