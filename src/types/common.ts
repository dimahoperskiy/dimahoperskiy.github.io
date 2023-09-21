import { ReactElement } from 'react';

export enum ProjectUrls {
  solarSystem = 'solar-system',
  flightsMonitoring = 'flights-monitoring',
  solutionCup = 'solution-cup',
  richbeeShows = 'richbee-shows',
  chat = 'chat',
}

export type Skill = {
  icon: ReactElement;
  label: string;
  color: string;
};
