import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Space, Typography, Divider, Tag, Timeline } from 'antd';
const { Paragraph, Title } = Typography;
import solarImg from 'assets/projectImages/solar-system.png';
import flightsImg from 'assets/projectImages/flights-monitoring.png';
import richbeeImg from 'assets/projectImages/richbee.png';
import solutionCupImg from 'assets/projectImages/solution-cup.png';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    h1 {
      margin: 0;
    }
  }
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  position: relative;
`;

const ProjectImage = styled.img`
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

const ImageOverlay = styled.div<{ $contrast?: boolean }>`
  background: ${(props) =>
    props.$contrast
      ? 'linear-gradient(180deg, rgba(255,255,255,0.3996192226890757) 0%, rgba(0,0,0,0.8) 100%)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 100%)'};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 5px;
`;

const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 15px;
`;

const StyledTimeline = styled(Timeline)`
  width: 40%;
  margin: 40px auto;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  imageSrc: string;
  tagLabel?: string;
  contrast?: boolean;
};

const ProjectCard = ({
  title,
  description,
  imageSrc,
  tagLabel,
  contrast = false,
}: ProjectCardProps) => {
  return (
    <ProjectCardWrapper>
      <ProjectImage width='550px' height='306px' src={imageSrc} alt='' />
      <ImageOverlay $contrast={contrast} />
      <CardInfo>
        <Paragraph
          style={{ fontWeight: 700, marginBottom: '5px', fontSize: '18px' }}
        >
          {title}
        </Paragraph>
        <Paragraph style={{ fontSize: '14px' }}>{description}</Paragraph>
      </CardInfo>
      {tagLabel && (
        <Tag
          color={contrast ? '#111' : '#00dfff'}
          style={{
            position: 'absolute',
            right: '2px',
            top: '10px',
            fontWeight: 700,
            color: !contrast ? '#111' : '#00dfff',
          }}
        >
          {tagLabel}
        </Tag>
      )}
    </ProjectCardWrapper>
  );
};

const projectsData: ProjectCardProps[] = [
  {
    url: 'solar-system',
    title: 'Solar System',
    description: 'React + Three.js project to create Solar System prototype',
    imageSrc: solarImg,
    tagLabel: 'Live demo',
  },
  {
    url: 'flights-monitoring',
    title: 'Flights monitoring',
    description:
      'React + OpenLayers Web-application to monitor flights in real time',
    imageSrc: flightsImg,
    tagLabel: 'Live demo',
    contrast: true,
  },
  {
    url: 'solution-cup',
    title: 'IT’s Tinkoff Solution Cup',
    description:
      'Expense tracker Web-application, developed in the IT’s Tinkoff Solution Cup final',
    imageSrc: solutionCupImg,
    tagLabel: 'Live demo',
    contrast: true,
  },
  {
    url: 'richbee-shows',
    title: 'Richbee Shows',
    description: 'React app using IMDb API to find info about films or series',
    imageSrc: richbeeImg,
    tagLabel: 'Live demo',
  },
  // {
  //   url: 'chat',
  //   title: 'Social network',
  //   description:
  //     'Fullstack client-server web-application for messaging with friends',
  //   imageSrc: chatImg,
  //   contrast: true,
  // },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projectsMapped = projectsData.map((project) => (
    <Link key={project.url} to={`project/${project.url}`}>
      <ProjectCard
        {...project}
        title={t(project.title)}
        description={t(project.description)}
        tagLabel={t(project.tagLabel)}
      />
    </Link>
  ));

  return (
    <Wrapper id='projects-section'>
      <Divider
        style={{
          width: '80%',
          minWidth: '80%',
          margin: '0 auto',
        }}
      />
      <Title
        style={{
          textTransform: 'uppercase',
          textAlign: 'center',
          fontWeight: 300,
          paddingTop: '40px',
        }}
        level={1}
      >
        {t('Projects')}
      </Title>
      <Space
        wrap
        style={{ justifyContent: 'center', padding: '40px 5% 0 5%' }}
        size={[32, 32]}
      >
        {projectsMapped}
      </Space>
      <Title
        style={{
          textTransform: 'uppercase',
          textAlign: 'center',
          fontWeight: 300,
          paddingTop: '40px',
        }}
        level={3}
      >
        {t('To be developed ...')}
      </Title>
      <StyledTimeline
        items={[
          {
            color: '#00dfff',
            children: t('Add other projects'),
          },
          {
            color: '#00dfff',
            children: t(
              'Reduce bundle size (currently 5MB of react-icons are loaded)',
            ),
          },
          {
            color: '#00dfff',
            children: t('Add some animations'),
          },
        ]}
      />
    </Wrapper>
  );
};

export default Projects;
