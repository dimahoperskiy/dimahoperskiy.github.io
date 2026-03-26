import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Col } from 'antd';
import { ProjectUrls } from '../../types/common';
import { useTranslation, Trans } from 'react-i18next';
import SkillTag from '../../components/SkillTag/SkillTag';
import { Skill } from '../../types/common';
import { SiGithub } from 'react-icons/si';
import skillsDataObject from '../../utils/skillsDataObject';
import {
  Wrapper,
  HeaderSpace,
  BackArrow,
  PageTitle,
  HorizontalDivider,
  DesktopRow,
  SectionTitle,
  VerticalDividerCol,
  VerticalDivider,
  StyledParagraph,
  MobileAboutParagraph,
  TechStackSpace,
  MobileTechStackSpace,
  SourceButtonDesktop,
  SourceButtonMobile,
  MobileColumn,
  MobileSectionTitle,
  IFrameWrapper,
  StyledIFrame,
  LoadingSpin,
  StyledQRCode,
} from './Project.styles';

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
      <HeaderSpace>
        <Link to='/'>
          <BackArrow />
        </Link>
        <PageTitle level={1}>{label}</PageTitle>
      </HeaderSpace>
      <HorizontalDivider />
      <DesktopRow>
        <Col span={11}>
          <SectionTitle level={1}>{t('About project')}</SectionTitle>
          <StyledParagraph>
            <Trans i18nKey={descriptionMessageId} />
          </StyledParagraph>
        </Col>
        <VerticalDividerCol span={2}>
          <VerticalDivider />
        </VerticalDividerCol>
        <Col span={11}>
          <SectionTitle level={1}>{t('Tech stack')}</SectionTitle>
          <TechStackSpace size={[8, 16]} wrap>
            {mappedSkills}
          </TechStackSpace>
          <SourceButtonDesktop
            target='_blank'
            href={sourceCodeUrl}
            size='large'
            icon={<SiGithub />}
          >
            {t('Source code')}
          </SourceButtonDesktop>
        </Col>
        <AdditionalInfo />
      </DesktopRow>
      <MobileColumn>
        <SectionTitle level={1}>{t('About project')}</SectionTitle>
        <MobileAboutParagraph>
          <Trans i18nKey={descriptionMessageId} />
        </MobileAboutParagraph>
        <AdditionalInfo />
        <HorizontalDivider />
        <MobileSectionTitle level={1}>{t('Tech stack')}</MobileSectionTitle>
        <MobileTechStackSpace size={[8, 16]} wrap>
          {mappedSkills}
        </MobileTechStackSpace>
        <SourceButtonMobile
          target='_blank'
          href={sourceCodeUrl}
          size='large'
          icon={<SiGithub />}
        >
          {t('Source code')}
        </SourceButtonMobile>
        <HorizontalDivider />
      </MobileColumn>
      {iFrameUrl && (
        <IFrameWrapper>
          {isIFrameLoading && <LoadingSpin size='large' />}
          <StyledIFrame
            $hidden={isIFrameLoading}
            onLoad={() => setIsIFrameLoading(false)}
            src={iFrameUrl}
          />
        </IFrameWrapper>
      )}
    </Wrapper>
  );
};

export default Project;
