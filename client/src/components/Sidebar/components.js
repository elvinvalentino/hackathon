import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { theme } from '../../theme';


export const LogoName = styled(Typography)`
    color: ${theme.color.primary};
    font-weight: 700;
    text-align: center;
    padding: 0.3em 0;
`