import { ContactContainer, ContactTitle, ContactSubTitle, ContactImage } from './components';
import Container from '@material-ui/core/Container';
import footerImage from '../../assets/images/footerImage.svg';

const Contact = () => {
    return (
        <ContactContainer>
            <Container>
                <ContactTitle>
                    Get in touch with KERD
                </ContactTitle>
                <ContactSubTitle>
                    Email : Kerdcorp@gmail.com
                </ContactSubTitle>
                <ContactImage src={footerImage} />
            </Container>
        </ContactContainer>
    )
}

export default Contact
