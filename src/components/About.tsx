import React from 'react';
import styled from 'styled-components';
import { Space, Typography, Col, Row } from 'antd';
const { Paragraph, Text } = Typography;
import meImg from 'assets/meShowing.png';
import { useTranslation } from 'react-i18next';

import SkillTag from './SkillTag';
import skillsDataObject from '../utils/skillsDataObject';
import { Skill } from '../types/common';

const MY_BIRTHDAY = '01-11-2002';

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const Me = styled.img`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 15%;
  margin: 0 auto;
`;

const declination = (number: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  const titles = [' год', ' года', ' лет'];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

const calculateAge = (birthday: any) => {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
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
];
const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const myAge = calculateAge(new Date(MY_BIRTHDAY));
  const label = declination(myAge);
  let addAgeParams = i18n.language === 'ru';

  const mappedSkills = skillsData.map((skill: Skill) => (
    <SkillTag key={skill.label} {...skill} />
  ));
  const mappedRareSkills = rareSkillsData.map((skill: Skill) => (
    <SkillTag key={skill.label} {...skill} />
  ));

  return (
    <Wrapper id='about-section'>
      <Row
        style={{
          paddingBottom: '450px',
          paddingLeft: '5%',
        }}
      >
        <Col
          span={6}
          offset={2}
          style={{
            position: 'relative',
            zIndex: 1,
            mixBlendMode: 'difference',
            top: '45px',
          }}
        >
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('Dmitriy')}, {myAge}{' '}
            {t('years old', addAgeParams && { label: label })},{' '}
            {t('aboutMeInfo')}
          </Paragraph>
        </Col>
        <Me width='330px' height='664px' src={meImg} />
        <Col span={11} offset={3}>
          <Text>{t('Decent knowledge')}</Text>
          <Space
            style={{ marginTop: '6px', marginBottom: '6px' }}
            size={[8, 8]}
            wrap
          >
            {mappedSkills}
          </Space>
          <Text>{t('Used a little')}</Text>
          <Space
            style={{ marginTop: '6px', marginBottom: '6px' }}
            size={[8, 8]}
            wrap
          >
            {mappedRareSkills}
          </Space>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default About;
