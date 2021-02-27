import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import { theme } from '../../theme';

export const Headline = styled.h1`
  /* letter-spacing: .1px/ */
  font-size: 2.75em;
  margin-bottom: .3em;
`

export const SubHeadline = styled.h3`
  font-size: 1.5em;
  margin: 0;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 1em;
`;

export const HeroImage = styled.img`
  width: 90%;
`

export const HeroButton = styled(Button)`
  background: ${theme.color.primary};
  color: #fff;
  box-shadow: unset;
  padding-left: 1.2em;
  padding-right: 1.2em;

  /* &:hover {
    background: 
  } */
`