import React from 'react';
import styled from 'styled-components';
import { Divider, Row, Col, Typography, Timeline } from 'antd';
import { useTranslation } from 'react-i18next';
import useShortDate from '../hooks/useShortDate';
const { Title, Paragraph } = Typography;

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

const TotalTimeText = styled.span<{ $title?: boolean }>`
  display: ${(props) => (props.$title ? 'inline-block' : 'inline')};
  width: 100%;
  text-align: center;
  transform: ${(props) =>
    props.$title ? 'translateY(-12px)' : 'translateY(0)'};
  font-weight: 300;
  text-transform: lowercase;
  margin-left: 12px;
  font-size: 16px;
  color: #fff;
  font-family: 'Raleway', sans-serif;
`;

const getYearWord = (years: number) => {
  const { t } = useTranslation();
  if (years % 10 === 1 && years % 100 !== 11) {
    return t('year1');
  } else if (
    years % 10 >= 2 &&
    years % 10 <= 4 &&
    (years % 100 < 10 || years % 100 >= 20)
  ) {
    return t('year2');
  } else {
    return t('year3');
  }
};

const getMonthWord = (months: number) => {
  const { t } = useTranslation();
  if (months % 10 === 1 && months % 100 !== 11) {
    return t('month1');
  } else if (
    months % 10 >= 2 &&
    months % 10 <= 4 &&
    (months % 100 < 10 || months % 100 >= 20)
  ) {
    return t('month2');
  } else {
    return t('month3');
  }
};

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
  description?: string,
  totalYears?: number,
  totalMonths?: number,
) => ({
  color: '#00dfff',
  children: (
    <>
      <Paragraph style={{ textTransform: 'uppercase', fontWeight: 700 }}>
        {title}
        <TotalTime totalYears={totalYears} totalMonths={totalMonths} />
      </Paragraph>
      <Paragraph style={{ fontWeight: 700 }}>
        {`${dateFrom} - ${dateTo}`}
      </Paragraph>
      {description && <Paragraph>{description}</Paragraph>}
    </>
  ),
});

const getCurrentDateFormatted = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const calculateYearsAndMonths = (startDate: string, endDate: string) => {
  const end = new Date(endDate);
  const start = new Date(startDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  months += 1;

  if (months >= 12) {
    years += 1;
    months -= 12;
  }

  return { years, months };
};

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
          <Timeline
            reverse
            style={{ paddingTop: '20px' }}
            items={[
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
                calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted())
                  .years,
                calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted())
                  .months,
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
        <Timeline
          reverse
          style={{ paddingTop: '20px' }}
          items={[
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
              calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted())
                .years,
              calculateYearsAndMonths('2024-01-01', getCurrentDateFormatted())
                .months,
            ),
          ]}
        />
      </MobileColumn>
    </Wrapper>
  );
};

export default Experience;
