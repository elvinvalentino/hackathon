import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import { lighten } from 'polished';

import { theme } from '../../theme';

export const StyledCard = styled(Card)`
    max-width: 345px;
    box-shadow: 0 4px 7px rgb(0 0 0 / 10%);
`

export const TextWithIcon = styled.div`
    display: flex;
    flex-direction: row;
`

export const IconContainer = styled.div`
    width: 35px;
`

export const StyledRoomIcon = styled(RoomIcon)`
    margin-right: .4em;
    color: rgba(0, 0, 0, 0.54);
`

export const StyledPersonIcon = styled(PersonIcon)`
    margin-right: .4em;
    color: rgba(0, 0, 0, 0.54);
`;

export const IconText = styled(Typography)`
`

export const ScheduleButton = styled(Button)`
    background: ${theme.color.primary};
    color: #fff;
    box-shadow: unset;
    padding-left: 1.2em;
    padding-right: 1.2em;
    text-transform: capitalize;
    margin: 0 2em 2em 0;

    &:hover {
        background: ${lighten(0.025, theme.color.primary)}
    }
`

export const CardButton = styled.div`
    display: flex;
    justify-content: flex-end;
`