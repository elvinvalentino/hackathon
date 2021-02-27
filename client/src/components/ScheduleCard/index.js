import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { 
    StyledCard,
    TextWithIcon, 
    IconText, 
    CardButton, 
    ScheduleButton,
    StyledPersonIcon,
    StyledRoomIcon,
    IconContainer
} from './components'

const ScheduleCard = () => {

    return (
        <StyledCard>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Charles Health Office
                </Typography>
                <TextWithIcon>
                    <IconContainer>
                        <StyledRoomIcon />
                    </IconContainer>
                    <IconText variant="body2" color="textSecondary" component="p">
                        Indonesia
                    </IconText>
                </TextWithIcon>
                <TextWithIcon>
                    <IconContainer>
                        <StyledPersonIcon />
                    </IconContainer>
                    <IconText variant="body2" color="textSecondary" component="p">
                        10.000 remaining
                    </IconText>
                </TextWithIcon>
            </CardContent>
            <CardButton>
                <ScheduleButton variant="contained">Register</ScheduleButton>
            </CardButton>
        </StyledCard>
    );
}

export default ScheduleCard;