import EnvironmentPage from '../../Components/EnvironmentPage/EnvironmentPage';

const travelData = {
  name: 'Travel',
  title: 'Awareness that stays with the space you are using.',
  intro:
    'VAJRA can provide mobile awareness in temporary or changing environments where maintaining continuous visual coverage can be difficult.',
  image: '/images/vajra-travel.jpeg',

  operationTitle: 'Designed for changing environments.',
  operations: [
    {
      title: 'Mobile monitoring',
      description:
        'VAJRA is designed to move through an environment rather than depending on a single fixed viewpoint.',
    },
    {
      title: 'Visual awareness',
      description:
        'Its onboard cameras provide visibility across the areas it is assigned to monitor.',
    },
    {
      title: 'Sensor-based navigation',
      description:
        'Onboard sensors support movement and environmental awareness as VAJRA operates in its surroundings.',
    },
    {
      title: 'Event flagging',
      description:
        'Relevant observations can be flagged so they can be reviewed instead of requiring someone to watch continuously.',
    },
  ],

  featureTitle: 'A security unit for spaces that change.',
  featureDescription:
    'Temporary environments can be difficult to monitor continuously. VAJRA is designed around mobile awareness so the unit can operate across the space rather than remaining fixed.',
  featureImage: '/images/vajratravel-closeup.jpeg',
  featureImageAlt: 'VAJRA operating in a travel environment',

  useCases: [
    'Monitoring temporary or changing spaces',
    'Maintaining visual awareness while moving through an environment',
    'Checking areas that may not have continuous human oversight',
    'Flagging observations that require attention',
  ],
};

export default function Travel() {
  return <EnvironmentPage environment={travelData} />;
}