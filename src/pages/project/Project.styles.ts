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
import { AiOutlineArrowLeft } from 'react-icons/ai';

const { Title, Paragraph } = Typography;

export const Wrapper = styled.div`
  padding: 40px;

  @media (max-width: 800px) {
    padding: 40px 5%;
  }
`;

export const HeaderSpace = styled(Space)`
  align-items: center;
  margin-bottom: 40px;
`;

export const BackArrow = styled(AiOutlineArrowLeft)`
  margin-right: 20px;
  color: #e2e2e2;
  font-size: 45px;
`;

export const PageTitle = styled(Title)`
  margin: 0;
`;

export const HorizontalDivider = styled(Divider)`
  width: 80%;
  min-width: 80%;
  margin: 0 auto;
`;

export const DesktopRow = styled(Row)`
  width: 85%;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SectionTitle = styled(Title)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
`;

export const MobileSectionTitle = styled(SectionTitle)`
  margin: 28px 0;
`;

export const VerticalDividerCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

export const VerticalDivider = styled(Divider).attrs({ type: 'vertical' })`
  height: 90%;
  margin-top: 30px;
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: justify;
  p {
    margin: 5px;
  }
`;

export const MobileAboutParagraph = styled(StyledParagraph)`
  margin-bottom: 28px;
`;

export const TechStackSpace = styled(Space)`
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const MobileTechStackSpace = styled(TechStackSpace)`
  margin-bottom: 28px;
`;

export const SourceButtonDesktop = styled(Button)`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 15px;
`;

export const SourceButtonMobile = styled(Button)`
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 28px;
`;

export const MobileColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  padding-bottom: 28px;

  @media (min-width: 801px) {
    display: none;
  }
`;

export const IFrameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIFrame = styled.iframe<{ $hidden?: boolean }>`
  width: 90%;
  height: 90vh;
  border: none;
  display: ${(p) => (p.$hidden ? 'none' : 'block')};

  @media (max-width: 800px) {
    width: 95%;
    height: 80vh;
  }
`;

export const LoadingSpin = styled(Spin)`
  margin-top: 50px;
`;

export const StyledQRCode = styled(QRCode)`
  margin: 0 auto;
  overflow: visible;

  @media (max-width: 800px) {
    padding-bottom: 40px;
    overflow: visible;
  }
`;
