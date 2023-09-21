import React from 'react';
import styled from 'styled-components';
import meImg from 'assets/me.png';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiGmail, SiTelegram } from 'react-icons/si';
import { Typography, Button, Space } from 'antd';
const { Title } = Typography;
import { AiOutlineArrowDown } from 'react-icons/ai';

const Wrapper = styled.section`
  display: flex;
`;

const AvatarBox = styled.div`
  width: 40%;
  position: relative;
`;

const Me = styled.img`
  position: absolute;
  bottom: 45px;
  right: 120px;
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
`;

const InfoTextWrapper = styled.div`
  padding-left: 25%;
`;

const Arrow = styled(AiOutlineArrowDown)`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  font-size: 35px;
  color: #00dfff;
  animation: MoveUpDown 1.5s linear infinite;

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

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Wrapper id='hero-section'>
      <AvatarBox>
        <Me width='183px' height='703px' src={meImg} />
      </AvatarBox>
      <InfoBox>
        <InfoTextWrapper>
          <Title level={2}>{t('Hi, I am')}</Title>
          <Title style={{ marginTop: '30px', marginBottom: '5px' }} level={1}>
            {t('Dmitriy Khoperskiy')}
          </Title>
          <Title style={{ marginTop: '0', fontWeight: 400 }} level={4}>
            {t('Front-end Developer')}
          </Title>
          <Space size='middle' style={{ marginTop: '100px' }}>
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
          </Space>
        </InfoTextWrapper>
      </InfoBox>
      <Arrow />
    </Wrapper>
  );
};

export default Hero;
