import React from 'react';
import styled from 'styled-components';
import meImg from 'assets/me.png';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiGmail, SiTelegram } from 'react-icons/si';
import { Typography, Button, Space } from 'antd';
const { Title } = Typography;
import { AiOutlineArrowDown } from 'react-icons/ai';
import HHIconImg from 'assets/hhlogo.png';

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background-color: #d7d7d7;

  @media (max-width: 800px) {
    flex-direction: column;

    h1 {
      font-size: 2em;
      margin-top: 10px !important;
    }

    h2 {
      font-size: 1.5em;
    }
  }
`;

const AvatarBox = styled.div`
  width: 40%;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    position: absolute;
    order: 2;
    display: flex;
    justify-content: center;
    bottom: 1%;
    z-index: 1;
  }
`;

const Me = styled.img`
  position: absolute;
  bottom: 45px;
  right: 120px;

  @media (max-width: 800px) {
    position: unset;
    height: 55vh;
    width: auto;
  }
`;

const InfoBox = styled.div`
  width: 60%;
  height: 100vh;
  background-color: #111;
  clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 60vh;
    justify-content: unset;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 72%);
    align-items: center;
  }
`;

const InfoTextWrapper = styled.div`
  padding-left: 25%;

  @media (max-width: 800px) {
    padding: 20px;
    text-align: center;
  }
`;

const ButtonsSpace = styled(Space)`
  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;

const Arrow = styled(AiOutlineArrowDown)`
  cursor: pointer;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: 35px;
  color: #00dfff;
  animation: MoveUpDown 1.5s linear infinite;

  @media (max-width: 800px) {
    z-index: 2;
    transform: scale(2);
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      bottom: 35px;
    }
    50% {
      bottom: 15px;
    }
  }
`;

const HHIcon = styled('img')`
  width: 18px;
  height: 18px;
`;

type HeroSectionProps = {
  aboutSectionRef: React.RefObject<HTMLElement>;
};

const Hero: React.FC<HeroSectionProps> = ({ aboutSectionRef }) => {
  const { t } = useTranslation();

  const handleScroll = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Wrapper id='hero-section'>
      <AvatarBox>
        <Me width='183px' height='703px' src={meImg} />
      </AvatarBox>
      <InfoBox>
        <InfoTextWrapper>
          <Title level={2}>{t('Hi, I am')}</Title>
          <Title
            level={1}
            style={{
              marginTop: 30,
              marginBottom: 5,
            }}
          >
            {t('Dmitriy Khoperskiy')}
          </Title>
          <Title style={{ marginTop: '0', fontWeight: 400 }} level={4}>
            {t('Front-end Developer')}
          </Title>
          <ButtonsSpace size='middle'>
            <Button
              target='_blank'
              href='mailto:dimahoperskiy@gmail.com'
              size='large'
              icon={<SiGmail />}
            />
            <Button
              target='_blank'
              href='https://github.com/dimahoperskiy'
              size='large'
              icon={<SiGithub />}
            />
            <Button
              target='_blank'
              href='https://t.me/dimbdi'
              size='large'
              icon={<SiTelegram />}
            />
            <Button
              target='_blank'
              href='https://hh.ru/resume/fdb658e3ff0b96263a0039ed1f794964466775'
              size='large'
              icon={<HHIcon src={HHIconImg} />}
            />
          </ButtonsSpace>
        </InfoTextWrapper>
      </InfoBox>
      <Arrow onClick={handleScroll} />
    </Wrapper>
  );
};

export default Hero;
