import React from 'react';
import { Col, TimelineItemProps, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import useShortDate from '../../hooks/useShortDate';
import {
  Wrapper,
  DesktopRow,
  MobileColumn,
  TotalTimeText,
  HorizontalDivider,
  SectionTitle,
  StyledTimeline,
  VerticalDividerCol,
  VerticalDivider,
  TimelineItemTitle,
  TimelineItemDates,
} from './Experience.styles';
import {
  calculateYearsAndMonths,
  getCurrentDateFormatted,
  getMonthWord,
  getYearWord,
} from '../../utils/dateUtils';

const { Paragraph } = Typography;

const TotalTime = ({
  totalYears,
  totalMonths,
  title,
}: {
  totalYears?: number;
  totalMonths?: number;
  title?: boolean;
}) => {
  if (!totalYears && !totalMonths) {
    return null;
  }

  const yearText = totalYears
    ? `${totalYears} ${getYearWord(totalYears)} `
    : '';
  const monthText = totalMonths
    ? `${totalMonths} ${getMonthWord(totalMonths)}`
    : '';

  return (
    <TotalTimeText $title={title}>
      ({yearText}
      {monthText})
    </TotalTimeText>
  );
};

const TimeLineItem = (
  title: string,
  dateFrom: string,
  dateTo: string,
  description?: React.ReactNode,
  totalYears?: number,
  totalMonths?: number,
) => ({
  color: '#00dfff',
  children: (
    <>
      <TimelineItemTitle>
        {title}
        <TotalTime totalYears={totalYears} totalMonths={totalMonths} />
      </TimelineItemTitle>
      <TimelineItemDates>{`${dateFrom} - ${dateTo}`}</TimelineItemDates>
      {description != null && description !== '' && (
        <Paragraph>{description}</Paragraph>
      )}
    </>
  ),
});

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const getShortDate = useShortDate();

  const educationTimelineItems: TimelineItemProps[] = [
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
      <>
        {t('Faculty of Information Technology and Big Data Analysis')},{' '}
        <b>{t('Applied Computer Science')}</b>
      </>,
    ),
    TimeLineItem(
      `${t(
        'Financial University under the Government of the Russian Federation',
      )} - ${t('Master')}`,
      getShortDate(2023, 9, 1),
      getShortDate(2025, 7, 31),
      <>
        {t('Faculty of Information Technology and Big Data Analysis')},{' '}
        <b>{t('DevOps Engineering')}</b>
      </>,
    ),
  ];

  const workExperienceTimelineItems: TimelineItemProps[] = [
    TimeLineItem(
      t('Freelance'),
      getShortDate(2019, 11, 1),
      getShortDate(2021, 4, 1),
      t('freelanceDescription'),
      calculateYearsAndMonths('2019-11-01', '2021-04-01').years,
      calculateYearsAndMonths('2019-11-01', '2021-04-01').months,
    ),
    TimeLineItem(
      t('Gusi-Lebedi'),
      getShortDate(2021, 6, 1),
      getShortDate(2022, 12, 31),
      t('gusiDescription'),
      calculateYearsAndMonths('2021-06-01', '2022-12-31').years,
      calculateYearsAndMonths('2021-06-01', '2022-12-31').months,
    ),
    TimeLineItem(
      t('Inmar Technologies'),
      getShortDate(2023, 1, 1),
      getShortDate(2024, 1, 1),
      t('inmarDescription'),
      calculateYearsAndMonths('2023-01-01', '2024-01-01').years,
      calculateYearsAndMonths('2023-01-01', '2024-01-01').months,
    ),
    TimeLineItem(
      t('Xsolla'),
      getShortDate(2024, 1, 1),
      t('Present'),
      t('xsollaDescription'),
      calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted()).years,
      calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted()).months,
    ),
  ];

  return (
    <Wrapper id='experience-section'>
      <HorizontalDivider />
      <DesktopRow>
        <Col span={11}>
          <SectionTitle style={{ marginBottom: '40px' }} level={1}>
            {t('Education')}
          </SectionTitle>
          <StyledTimeline reverse items={educationTimelineItems} />
        </Col>
        <VerticalDividerCol span={2}>
          <VerticalDivider />
        </VerticalDividerCol>
        <Col span={11}>
          <SectionTitle level={1}>{t('Work experience')}</SectionTitle>
          <TotalTime
            totalYears={
              calculateYearsAndMonths('2019-11-01', getCurrentDateFormatted())
                .years
            }
            totalMonths={
              calculateYearsAndMonths('2019-11-01', getCurrentDateFormatted())
                .months
            }
            title
          />
          <StyledTimeline reverse items={workExperienceTimelineItems} />
        </Col>
      </DesktopRow>
      <MobileColumn>
        <SectionTitle level={1}>{t('Education')}</SectionTitle>
        <StyledTimeline reverse items={educationTimelineItems} />
        <HorizontalDivider />
        <SectionTitle level={1}>{t('Work experience')}</SectionTitle>
        <TotalTime
          totalYears={
            calculateYearsAndMonths('2019-11-01', getCurrentDateFormatted())
              .years
          }
          totalMonths={
            calculateYearsAndMonths('2019-11-01', getCurrentDateFormatted())
              .months
          }
          title
        />
        <StyledTimeline reverse items={workExperienceTimelineItems} />
      </MobileColumn>
    </Wrapper>
  );
};

export default Experience;
