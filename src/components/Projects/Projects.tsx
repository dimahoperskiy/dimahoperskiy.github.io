import React from 'react';
import { useTranslation } from 'react-i18next';
import solarImg from 'assets/projectImages/solar-system.png';
import flightsImg from 'assets/projectImages/flights-monitoring.png';
import richbeeImg from 'assets/projectImages/richbee.png';
import solutionCupImg from 'assets/projectImages/solution-cup.png';
import meSittingImg from 'assets/meSitting.png';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  ProjectCardWrapper,
  ProjectImage,
  ImageOverlay,
  CardInfo,
  CardTitle,
  CardDescription,
  ProjectCardTag,
  StyledTimeline,
  HorizontalDivider,
  SectionTitle,
  SubsectionTitle,
  ProjectsGrid,
  CardDate,
  MeSitting,
} from './Projects.styles';

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  imageSrc: string;
  tagLabel?: string;
  contrast?: boolean;
  year?: number;
};

const ProjectCard = ({
  url,
  title,
  description,
  imageSrc,
  tagLabel,
  year,
  contrast = false,
}: ProjectCardProps) => {
  const { t } = useTranslation();
  const isSolarSystemProjct = url === 'solar-system';

  return (
    <ProjectCardWrapper>
      <ProjectImage width='550px' height='306px' src={imageSrc} alt='' />
      <ImageOverlay $contrast={contrast} />
      {isSolarSystemProjct && <MeSitting src={meSittingImg} />}
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        {year && (
          <CardDate>
            {year}
            {t('year-short')}
          </CardDate>
        )}
        <CardDescription>{description}</CardDescription>
      </CardInfo>
      {tagLabel && (
        <ProjectCardTag
          $contrast={contrast}
          color={contrast ? '#111' : '#00dfff'}
        >
          {tagLabel}
        </ProjectCardTag>
      )}
    </ProjectCardWrapper>
  );
};

const projectsData: ProjectCardProps[] = [
  {
    url: 'flights-monitoring',
    title: 'Flights monitoring',
    description:
      'React + OpenLayers Web-application to monitor flights in real time',
    imageSrc: flightsImg,
    tagLabel: 'Live demo',
    contrast: true,
    year: 2023,
  },
  {
    url: 'solar-system',
    title: 'Solar System',
    description: 'React + Three.js project to create Solar System prototype',
    imageSrc: solarImg,
    tagLabel: 'Live demo',
    year: 2022,
  },
  {
    url: 'solution-cup',
    title: 'IT’s Tinkoff Solution Cup',
    description:
      'Expense tracker Web-application, developed in the IT’s Tinkoff Solution Cup final',
    imageSrc: solutionCupImg,
    tagLabel: 'Live demo',
    contrast: true,
    year: 2023,
  },
  {
    url: 'richbee-shows',
    title: 'Richbee Shows',
    description: 'React app using IMDb API to find info about films or series',
    imageSrc: richbeeImg,
    tagLabel: 'Live demo',
    year: 2021,
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectsMapped = projectsData.map((project) => (
    <Link key={project.url} to={`project/${project.url}`}>
      <ProjectCard
        {...project}
        title={t(project.title)}
        description={t(project.description)}
        tagLabel={project.tagLabel ? t(project.tagLabel) : ''}
      />
    </Link>
  ));

  return (
    <Wrapper id='projects-section'>
      <HorizontalDivider />
      <SectionTitle level={1}>{t('Projects')}</SectionTitle>
      <ProjectsGrid wrap size={[32, 32]}>
        {projectsMapped}
      </ProjectsGrid>
    </Wrapper>
  );
};

export default Projects;
