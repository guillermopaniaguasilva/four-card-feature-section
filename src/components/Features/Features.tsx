import { Heading, Description, Bold } from './styles';
import Feature, { FeatureType } from '../Feature/Feature';

type FeaturesProps = {
  features: FeatureType[];
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <>
      <Heading>Reliable, efficient delivery</Heading>
      <Bold>Powered by Technology</Bold>
      <Description>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successul.
      </Description>
      {features.map(({ heading, description, icon, accentColor }, index) => (
        <Feature
          key={index}
          heading={heading}
          description={description}
          icon={icon}
          accentColor={accentColor}
        />
      ))}
    </>
  );
};

export default Features;
