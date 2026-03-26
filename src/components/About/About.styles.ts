import styled from 'styled-components';
import { Space, Typography, Col, Row } from 'antd';

const { Paragraph, Title } = Typography;

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  @media (max-width: 800px) {
    justify-content: unset;
    height: auto;
    padding-bottom: 35px;
  }
`;

export const DesktopRow = styled(Row)`
  padding-bottom: 590px;
  padding-left: 5%;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TextCol = styled(Col)`
  position: relative;
  z-index: 1;
  mix-blend-mode: difference;
  top: 65px;
`;

export const Me = styled.img`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 15%;
  margin: 0 auto;
`;

export const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;

  @media (min-width: 801px) {
    display: none;
  }
`;

export const JustifyParagraph = styled(Paragraph)`
  text-align: justify;
`;

export const MobileIntroParagraph = styled(JustifyParagraph)`
  margin-bottom: 40px;
`;

export const SkillsSpace = styled(Space)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const MobileSkillsSpace = styled(SkillsSpace)`
  margin-bottom: 40px;
`;

export const MobileSectionTitle = styled(Title)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  padding-top: 40px;
  margin-top: 0;
`;
