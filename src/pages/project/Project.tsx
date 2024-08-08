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
const { Title, Paragraph } = Typography;
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SkillTag from '../../components/SkillTag';
import { Skill } from '../../types/common';
import { SiGithub } from 'react-icons/si';
import skillsDataObject from '../../utils/skillsDataObject';

const Wrapper = styled.div`
  padding: 40px;

  @media (max-width: 800px) {
    padding: 40px 5%;
  }
`;

const IFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledIFrame = styled.iframe`
  width: 90%;
  height: 90vh;
  border: none;

  @media (max-width: 800px) {
    width: 95%;
    height: 80vh;
  }
`;

const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  p {
    margin: 5px;
  }
`;

const StyledQRCode = styled(QRCode)`
  margin: 0 auto;
  overflow: visible;

  @media (max-width: 800px) {
    padding-bottom: 40px;
    overflow: visible;
  }
`;

const DesktopRow = styled(Row)`
  width: 85%;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  padding-bottom: 28px;

  @media (min-width: 801px) {
    display: none;
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
        <StyledQRCode value='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
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
      <DesktopRow>
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
        <AdditionalInfo />
      </DesktopRow>
      <MobileColumn>
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
        <StyledParagraph style={{ marginBottom: '28px' }}>
          <Trans i18nKey={descriptionMessageId} />
        </StyledParagraph>
        <AdditionalInfo />
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
            margin: '28px 0',
          }}
          level={1}
        >
          {t('Tech stack')}
        </Title>
        <Space
          style={{ marginTop: '6px', marginBottom: '28px' }}
          size={[8, 16]}
          wrap
        >
          {mappedSkills}
        </Space>
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '170px',
            justifyContent: 'center',
            textDecoration: 'none',
            marginBottom: '28px',
          }}
          target='_blank'
          href={sourceCodeUrl}
          size='large'
          icon={<SiGithub />}
        >
          {t('Source code')}
        </Button>
        <Divider
          style={{
            width: '80%',
            minWidth: '80%',
            margin: '0 auto',
          }}
        />
      </MobileColumn>
      {iFrameUrl && (
        <IFrameWrapper>
          {isIFrameLoading && (
            <Spin style={{ marginTop: '50px' }} size='large' />
          )}
          <StyledIFrame
            onLoad={() => setIsIFrameLoading(false)}
            style={{
              display: isIFrameLoading ? 'none' : 'block',
            }}
            src={iFrameUrl}
          />
        </IFrameWrapper>
      )}
    </Wrapper>
  );
};

export default Project;
