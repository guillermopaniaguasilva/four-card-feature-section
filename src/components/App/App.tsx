import './App.css';
import Features from '../Features/Features';
import { FeatureType } from '../Feature/Feature';
import { COLORS } from '../../styles/colors';

const features: FeatureType[] = [
  {
    heading: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: 'assets/images/icon-supervisor.svg',
    accentColor: COLORS.CYAN,
  },
  {
    heading: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    icon: 'assets/images/icon-team-builder.svg',
    accentColor: COLORS.RED,
  },
  {
    heading: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: 'assets/images/icon-karma.svg',
    accentColor: COLORS.ORANGE,
  },
  {
    heading: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    icon: 'assets/images/icon-calculator.svg',
    accentColor: COLORS.BLUE,
  },
];

const App = () => {
  return (
    <div className="App">
      <Features features={features} />
    </div>
  );
};

export default App;
