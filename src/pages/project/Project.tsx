import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  Typography,
  Space,
  Divider,
  Row,
  Col,
  Button,
  Spin,
  QRCode,
} from 'antd';
import { ProjectUrls } from '../../types/common';
import { useTranslation, Trans } from 'react-i18next';
const { Title, Text, Paragraph } = Typography;
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SkillTag from '../../components/SkillTag';
import { Skill } from '../../types/common';
import { SiGithub } from 'react-icons/si';
import skillsDataObject from '../../utils/skillsDataObject';

const Wrapper = styled.div`
  padding: 40px;
`;

const IFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  p {
    margin: 5px;
  }
`;

const Project: React.FC = () => {
  const { projectUrl } = useParams();
  const { t } = useTranslation();
  const [isIFrameLoading, setIsIFrameLoading] = React.useState(true);
  let label = '';
  let descriptionMessageId = '';
  let skills: Skill[] = [];
  let sourceCodeUrl = '';
  let iFrameUrl = '';
  let AdditionalInfo = () => <div />;
  switch (projectUrl) {
    case ProjectUrls.solarSystem:
      label = t('Solar System');
      descriptionMessageId = 'solarSystemDescription';
      sourceCodeUrl = 'https://github.com/dimahoperskiy/solar-system';
      iFrameUrl = 'https://dimahoperskiy.github.io/solar-system';
      skills = [
        skillsDataObject.react,
        skillsDataObject.threeJs,
        skillsDataObject.sass,
        skillsDataObject.javaScript,
        skillsDataObject.html,
        skillsDataObject.css,
      ];
      break;
    case ProjectUrls.flightsMonitoring:
      label = t('Flights monitoring');
      descriptionMessageId = 'flightsMonitoringDescription';
      sourceCodeUrl = 'https://github.com/dimahoperskiy/flights-monitoring';
      iFrameUrl = 'https://dimahoperskiy.github.io/flights-monitoring';
      skills = [
        skillsDataObject.react,
        skillsDataObject.openLayers,
        skillsDataObject.mui,
        skillsDataObject.styledComponents,
        skillsDataObject.axios,
        skillsDataObject.eslint,
        skillsDataObject.javaScript,
        skillsDataObject.html,
        skillsDataObject.css,
      ];
      break;
    case ProjectUrls.solutionCup:
      label = t('IT’s Tinkoff Solution Cup');
      descriptionMessageId = 'solutionCupDescription';
      sourceCodeUrl = 'https://github.com/dimahoperskiy/solution-cup';
      iFrameUrl = 'https://dimahoperskiy.github.io/solution-cup';
      skills = [
        skillsDataObject.react,
        skillsDataObject.mui,
        skillsDataObject.styledComponents,
        skillsDataObject.javaScript,
        skillsDataObject.html,
        skillsDataObject.css,
      ];
      break;
    case ProjectUrls.richbeeShows:
      label = t('Richbee Shows');
      descriptionMessageId = 'richbeeDescription';
      sourceCodeUrl = 'https://github.com/dimahoperskiy/richbee-shows';
      iFrameUrl = 'https://dimahoperskiy.github.io/richbee-shows';
      skills = [
        skillsDataObject.react,
        skillsDataObject.sass,
        skillsDataObject.axios,
        skillsDataObject.javaScript,
        skillsDataObject.html,
        skillsDataObject.css,
      ];
      AdditionalInfo = () => (
        <QRCode
          style={{
            marginLeft: '20%',
            paddingBottom: '90px',
            overflow: 'visible',
          }}
          value='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        />
      );
      break;
    case ProjectUrls.chat:
      label = t('Social network');
      descriptionMessageId = 'solutionCupDescription';
      sourceCodeUrl = 'https://github.com/dimahoperskiy/solution-cup';
      skills = [
        skillsDataObject.react,
        skillsDataObject.mui,
        skillsDataObject.styledComponents,
        skillsDataObject.javaScript,
        skillsDataObject.html,
        skillsDataObject.css,
      ];
      break;
    default:
      return <Navigate to='/' />;
  }

  const mappedSkills = skills.map((skill: Skill) => (
    <SkillTag bigSize key={skill.label} {...skill} />
  ));

  return (
    <Wrapper>
      <Space style={{ alignItems: 'center', marginBottom: '40px' }}>
        <Link to='/'>
          <AiOutlineArrowLeft
            style={{
              marginRight: '20px',
              color: '#e2e2e2',
              fontSize: '45px',
            }}
          />
        </Link>
        <Title style={{ margin: 0 }} level={1}>
          {label}
        </Title>
      </Space>
      <Divider
        style={{
          width: '80%',
          minWidth: '80%',
          margin: '0 auto',
        }}
      />
      <Row
        style={{
          width: '85%',
          margin: '0 auto',
          paddingTop: '10px',
          marginBottom: '40px',
        }}
      >
        <Col span={11}>
          <Title
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              fontWeight: 300,
            }}
            level={1}
          >
            {t('About project')}
          </Title>
          <StyledParagraph>
            <Trans i18nKey={descriptionMessageId} />
          </StyledParagraph>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }} span={2}>
          <Divider
            type='vertical'
            style={{
              height: '90%',
              marginTop: '30px',
            }}
          />
        </Col>
        <Col span={11}>
          <Title
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              fontWeight: 300,
            }}
            level={1}
          >
            {t('Tech stack')}
          </Title>
          <Space
            style={{ marginTop: '6px', marginBottom: '6px' }}
            size={[8, 16]}
            wrap
          >
            {mappedSkills}
          </Space>
          <Button
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              bottom: '15px',
            }}
            target='_blank'
            href={sourceCodeUrl}
            size='large'
            icon={<SiGithub />}
          >
            {t('Source code')}
          </Button>
        </Col>
      </Row>
      <AdditionalInfo />
      {iFrameUrl && (
        <IFrameWrapper>
          {isIFrameLoading && (
            <Spin style={{ marginTop: '50px' }} size='large' />
          )}
          <iframe
            onLoad={() => setIsIFrameLoading(false)}
            style={{
              display: isIFrameLoading ? 'none' : 'block',
              width: '90%',
              height: '90vh',
              border: 'none',
            }}
            src={iFrameUrl}
          />
        </IFrameWrapper>
      )}
    </Wrapper>
  );
};

export default Project;
