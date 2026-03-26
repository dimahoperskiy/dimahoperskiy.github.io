import React from 'react';
import { Typography, Col } from 'antd';
import meImg from '../../assets/meShowingUpdated.png';
import { useTranslation } from 'react-i18next';

import SkillTag from '../SkillTag/SkillTag';
import skillsDataObject from '../../utils/skillsDataObject';
import { Skill } from '../../types/common';
import Balancer from 'react-wrap-balancer';
import {
  Wrapper,
  DesktopRow,
  TextCol,
  Me,
  MobileColumn,
  JustifyParagraph,
  MobileIntroParagraph,
  SkillsSpace,
  MobileSkillsSpace,
  MobileSectionTitle,
} from './About.styles';

const { Text } = Typography;

const MY_BIRTHDAY = '2002-01-11';

const declination = (number: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = [' год', ' года', ' лет'];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const calculateAge = (birthday: Date) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const skillsData: Skill[] = [
  skillsDataObject.javaScript,
  skillsDataObject.typeScript,
  skillsDataObject.react,
  skillsDataObject.redux,
  skillsDataObject.html,
  skillsDataObject.css,
  skillsDataObject.styledComponents,
  skillsDataObject.sass,
  skillsDataObject.mui,
  skillsDataObject.webpack,
  skillsDataObject.eslint,
  skillsDataObject.git,
  skillsDataObject.nodeJs,
  skillsDataObject.reactRouter,
  skillsDataObject.axios,
  skillsDataObject.tailwind,
  skillsDataObject.vite,
  skillsDataObject.i18next,
];

const rareSkillsData: Skill[] = [
  skillsDataObject.python,
  skillsDataObject.spring,
  skillsDataObject.express,
  skillsDataObject.graphQl,
  skillsDataObject.threeJs,
  skillsDataObject.reactQuery,
  skillsDataObject.antDesign,
  skillsDataObject.openLayers,
  skillsDataObject.postgresql,
  skillsDataObject.linux,
  skillsDataObject.firebase,
  skillsDataObject.neo4j,
];

type AboutSectionProps = {
  aboutSectionRef: React.RefObject<HTMLElement>;
};
const About: React.FC<AboutSectionProps> = ({ aboutSectionRef }) => {
  const { t, i18n } = useTranslation();
  const myAge = calculateAge(new Date(MY_BIRTHDAY));
  const label = declination(myAge || 21);
  const addAgeParams = i18n.language === 'ru';

  const mappedSkills = skillsData.map((skill: Skill) => (
    <SkillTag key={skill.label} {...skill} />
  ));
  const mappedRareSkills = rareSkillsData.map((skill: Skill) => (
    <SkillTag key={skill.label} {...skill} />
  ));

  return (
    <Wrapper ref={aboutSectionRef} id='about-section'>
      <DesktopRow>
        <TextCol span={6} offset={2}>
          <JustifyParagraph>
            {t('Dmitriy')}, {myAge}{' '}
            {addAgeParams ? t('years old', { label }) : t('years old')},{' '}
            {t('aboutMeInfo')}
          </JustifyParagraph>
        </TextCol>
        <Me width='323px' height='664px' src={meImg} />
        <Col span={11} offset={3}>
          <Text>{t('Decent knowledge')}</Text>
          <SkillsSpace size={[8, 8]} wrap>
            {mappedSkills}
          </SkillsSpace>
          <Text>{t('Used a little')}</Text>
          <SkillsSpace size={[8, 8]} wrap>
            {mappedRareSkills}
          </SkillsSpace>
        </Col>
      </DesktopRow>
      <MobileColumn>
        <MobileSectionTitle level={1}>{t('About me')}</MobileSectionTitle>
        <MobileIntroParagraph>
          {t('Dmitriy')}, {myAge || 21}{' '}
          {addAgeParams ? t('years old', { label }) : t('years old')},{' '}
          {t('aboutMeInfo')}
        </MobileIntroParagraph>
        <Text>{t('Decent knowledge')}</Text>
        <MobileSkillsSpace size={[8, 8]} wrap>
          {mappedSkills}
        </MobileSkillsSpace>
        <Text>{t('Used a little')}</Text>
        <SkillsSpace size={[8, 8]} wrap>
          {mappedRareSkills}
        </SkillsSpace>
      </MobileColumn>
    </Wrapper>
  );
};

export default About;
