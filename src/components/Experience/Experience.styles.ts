import styled from 'styled-components';
import { Divider, Row, Col, Typography, Timeline } from 'antd';

const { Title, Paragraph } = Typography;

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const DesktopRow = styled(Row)`
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;

  @media (min-width: 801px) {
    display: none;
  }
`;

export const TotalTimeText = styled.span<{ $title?: boolean }>`
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

export const HorizontalDivider = styled(Divider)`
  width: 80%;
  min-width: 80%;
  margin: 0 auto;
`;

export const SectionTitle = styled(Title)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`;

export const StyledTimeline = styled(Timeline)`
  padding-top: 20px;
`;

export const VerticalDividerCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const VerticalDivider = styled(Divider).attrs({ type: 'vertical' })`
  height: 80%;
  margin-top: 15px;
`;

export const TimelineItemTitle = styled(Paragraph)`
  text-transform: uppercase;
  font-weight: 700;
`;

export const TimelineItemDates = styled(Paragraph)`
  font-weight: 700;
`;
