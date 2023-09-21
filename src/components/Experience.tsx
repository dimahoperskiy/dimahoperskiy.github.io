import React from 'react';
import styled from 'styled-components';
import { Divider, Row, Col, Typography, Timeline } from 'antd';
import { useTranslation } from 'react-i18next';
import useShortDate from '../hooks/useShortDate';
const { Title, Paragraph, Text } = Typography;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: auto;
  }
`;

const DesktopRow = styled(Row)`
  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;

  @media (min-width: 801px) {
    display: none;
  }
`;

const TimeLineItem = (
  title: string,
  dateFrom: string,
  dateTo: string,
  description?: string,
) => ({
  color: '#00dfff',
  children: (
    <>
      <Paragraph style={{ textTransform: 'uppercase', fontWeight: 700 }}>
        {title}
      </Paragraph>
      <Paragraph
        style={{ fontWeight: 700 }}
      >{`${dateFrom} - ${dateTo}`}</Paragraph>
      {description && <Paragraph>{description}</Paragraph>}
    </>
  ),
});

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const getShortDate = useShortDate();

  return (
    <Wrapper id='experience-section'>
      <Divider
        style={{
          width: '80%',
          minWidth: '80%',
          margin: '0 auto',
        }}
      />
      <DesktopRow
        style={{ width: '80%', margin: '0 auto', paddingTop: '40px' }}
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
            {t('Education')}
          </Title>
          <Timeline
            reverse
            style={{ paddingTop: '20px' }}
            items={[
              TimeLineItem(
                t('School No. 1319'),
                getShortDate(2008, 9, 1),
                getShortDate(2019, 6, 31),
                t('School No. 1319, with in-depth study of English'),
              ),
              TimeLineItem(
                `${t(
                  'Financial University under the Government of the Russian Federation',
                )} - ${t('Bachelor')}`,
                getShortDate(2019, 9, 1),
                getShortDate(2023, 7, 31),
                `${t(
                  'Faculty of Information Technology and Big Data Analysis',
                )}, ${t('Applied Computer Science')}`,
              ),
              TimeLineItem(
                `${t(
                  'Financial University under the Government of the Russian Federation',
                )} - ${t('Master')}`,
                getShortDate(2023, 9, 1),
                t('Present'),
                `${t(
                  'Faculty of Information Technology and Big Data Analysis',
                )}, ${t('DevOps Engineering')}`,
              ),
            ]}
          />
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }} span={2}>
          <Divider
            type='vertical'
            style={{
              height: '80%',
              marginTop: '15px',
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
            {t('Work experience')}
          </Title>
          <Timeline
            reverse
            style={{ paddingTop: '20px' }}
            items={[
              TimeLineItem(
                t('Freelance'),
                getShortDate(2019, 11, 1),
                getShortDate(2021, 4, 1),
                t('freelanceDescription'),
              ),
              TimeLineItem(
                t('Gusi-Lebedi'),
                getShortDate(2021, 6, 1),
                getShortDate(2022, 12, 31),
                t('gusiDescription'),
              ),
              TimeLineItem(
                t('Xsolla'),
                getShortDate(2021, 6, 1),
                getShortDate(2022, 12, 31),
                t('xsollaDescription'),
              ),
              TimeLineItem(
                t('Inmar Technologies'),
                getShortDate(2023, 1, 1),
                t('Present'),
              ),
            ]}
          />
        </Col>
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
          {t('Education')}
        </Title>
        <Timeline
          reverse
          style={{ paddingTop: '20px' }}
          items={[
            TimeLineItem(
              t('School No. 1319'),
              getShortDate(2008, 9, 1),
              getShortDate(2019, 6, 31),
              t('School No. 1319, with in-depth study of English'),
            ),
            TimeLineItem(
              `${t(
                'Financial University under the Government of the Russian Federation',
              )} - ${t('Bachelor')}`,
              getShortDate(2019, 9, 1),
              getShortDate(2023, 7, 31),
              `${t(
                'Faculty of Information Technology and Big Data Analysis',
              )}, ${t('Applied Computer Science')}`,
            ),
            TimeLineItem(
              `${t(
                'Financial University under the Government of the Russian Federation',
              )} - ${t('Master')}`,
              getShortDate(2023, 9, 1),
              t('Present'),
              `${t(
                'Faculty of Information Technology and Big Data Analysis',
              )}, ${t('DevOps Engineering')}`,
            ),
          ]}
        />
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
          }}
          level={1}
        >
          {t('Work experience')}
        </Title>
        <Timeline
          reverse
          style={{ paddingTop: '20px' }}
          items={[
            TimeLineItem(
              t('Freelance'),
              getShortDate(2019, 11, 1),
              getShortDate(2021, 4, 1),
              t('freelanceDescription'),
            ),
            TimeLineItem(
              t('Gusi-Lebedi'),
              getShortDate(2021, 6, 1),
              getShortDate(2022, 12, 31),
              t('gusiDescription'),
            ),
            TimeLineItem(
              t('Xsolla'),
              getShortDate(2021, 6, 1),
              getShortDate(2022, 12, 31),
              t('xsollaDescription'),
            ),
            TimeLineItem(
              t('Inmar Technologies'),
              getShortDate(2023, 1, 1),
              t('Present'),
            ),
          ]}
        />
      </MobileColumn>
    </Wrapper>
  );
};

export default Experience;
