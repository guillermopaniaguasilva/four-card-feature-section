import { Container, Heading, Description, Icon } from './styles';

export type FeatureType = {
  heading: string;
  description: string;
  icon: string;
  accentColor: string;
};

type FeatureProps = {
  heading: string;
  description: string;
  icon: string;
  accentColor: string;
};

const Feature = ({ heading, description, icon, accentColor }: FeatureProps) => {
  return (
    <Container accentColor={accentColor}>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
      <Icon src={icon} />
    </Container>
  );
};

export default Feature;
