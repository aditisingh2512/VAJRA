import EnvironmentPage from '../../Components/EnvironmentPage/EnvironmentPage';

const officeData = {
  name: 'Office',
  title: 'Continuous awareness across the working environment.',
  intro:
    'VAJRA moves through offices and shared workspaces, providing mobile visual awareness across areas that are difficult to monitor continuously.',
  image: '/images/vajra-office.jpeg',

  operationTitle: 'Coverage across the working environment.',
  operations: [
    {
      title: 'Movement across shared spaces',
      description:
        'VAJRA can move through assigned areas such as corridors, rooms and other shared spaces.',
    },
    {
      title: 'Mobile visual monitoring',
      description:
        'Its onboard cameras provide visibility while the unit moves through different parts of the environment.',
    },
    {
      title: 'Environmental sensing',
      description:
        'Onboard sensors support VAJRA as it navigates and monitors the spaces around it.',
    },
    {
      title: 'Event flagging',
      description:
        'VAJRA can flag observations that require attention instead of requiring staff to continuously monitor every area.',
    },
  ],

  featureTitle: 'A mobile layer of awareness for the workplace.',
  featureDescription:
    'From shared areas to less frequently occupied spaces, VAJRA is designed to move through the environment and provide an additional layer of visual awareness.',
  featureImage: '/images/vajraoffice-closeup.jpeg',
  featureImageAlt: 'VAJRA operating in an office environment',

  useCases: [
    'Monitoring corridors and shared workspaces',
    'Checking areas with limited regular occupancy',
    'Maintaining visual awareness across multiple areas',
    'Flagging observations for the team to review',
  ],
};

export default function Office() {
  return <EnvironmentPage environment={officeData} />;
}