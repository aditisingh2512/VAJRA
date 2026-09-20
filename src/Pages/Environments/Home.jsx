import EnvironmentPage from '../../Components/EnvironmentPage/EnvironmentPage';

const homeData = {
  name: 'Home',
  title: 'Autonomous awareness for the spaces you call home.',
  intro:
    'VAJRA moves through residential spaces on its own, observing rooms and shared areas through its onboard cameras and sensors.',
  image: '/images/vajra-home.jpeg',

  operationTitle: 'A security unit that moves through the home.',
  operations: [
    {
      title: 'Room-to-room movement',
      description:
        'VAJRA can move through the spaces it is assigned to monitor instead of remaining fixed in one position.',
    },
    {
      title: 'Visual awareness',
      description:
        'Onboard cameras provide visibility across rooms and areas that may not be directly visible from a fixed viewpoint.',
    },
    {
      title: 'Sensor-based monitoring',
      description:
        'Its onboard sensors support awareness of the environment while VAJRA moves through the space.',
    },
    {
      title: 'Event flagging',
      description:
        'When VAJRA detects something that requires attention, it can flag the event rather than relying on someone to continuously watch.',
    },
  ],

  featureTitle: 'Coverage that moves with the environment.',
  featureDescription:
    'Homes change throughout the day. VAJRA is designed to move through the environment and maintain awareness across the areas it is assigned to monitor.',
  featureImage: '/images/vajrahome-closeup.jpeg',
  featureImageAlt: 'VAJRA operating inside a home',

  useCases: [
    'Monitoring rooms and shared residential spaces',
    'Checking areas that are not continuously occupied',
    'Maintaining visual awareness while moving through the home',
    'Flagging events that may require attention',
  ],
};

export default function Home() {
  return <EnvironmentPage environment={homeData} />;
}