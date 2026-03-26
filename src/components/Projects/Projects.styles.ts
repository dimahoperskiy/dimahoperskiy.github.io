import styled from 'styled-components';
import { Space, Typography, Divider, Tag, Timeline } from 'antd';

const { Paragraph, Title } = Typography;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (max-width: 800px) {
    h1 {
      margin: 0;
    }
  }
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const ProjectImage = styled.img`
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

export const ImageOverlay = styled.div<{ $contrast?: boolean }>`
  background: ${(props) =>
    props.$contrast
      ? 'linear-gradient(180deg, rgba(255,255,255,0.3996192226890757) 0%, rgba(0,0,0,0.8) 100%)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 100%)'};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 5px;
`;

export const MeSitting = styled.img`
  position: absolute;
  height: 60px;
  left: 30px;
  top: -50px;
  transform-origin: 50% 100%;
  animation: meSittingSway 4s ease-in-out infinite;

  @keyframes meSittingSway {
    0%,
    100% {
      transform: translateY(0) rotate(-2deg);
    }
    50% {
      transform: translateY(-2px) rotate(2deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 15px;
`;

export const CardTitle = styled(Paragraph)`
  &&.ant-typography {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const CardDate = styled(Paragraph)`
  &&.ant-typography {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
  }
`;

export const CardDescription = styled(Paragraph)`
  font-size: 14px;
`;

export const ProjectCardTag = styled(Tag)<{ $contrast?: boolean }>`
  position: absolute;
  right: 2px;
  top: 10px;
  font-weight: 700;
  color: ${(p) => (p.$contrast ? '#00dfff' : '#111')} !important;
`;

export const StyledTimeline = styled(Timeline)`
  width: 40%;
  margin: 40px auto;

  @media (max-width: 800px) {
    width: 80%;
  }
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
  padding-top: 40px;
`;

export const SubsectionTitle = styled(Title)`
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  padding-top: 40px;
`;

export const ProjectsGrid = styled(Space)`
  justify-content: center;
  padding: 40px 5% 0 5%;
`;
