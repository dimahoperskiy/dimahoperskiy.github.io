import React from 'react';
import meImg from '../../assets/meUpdated.png';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiGmail, SiTelegram, SiLinkedin } from 'react-icons/si';
import { Button } from 'antd';
import {
  Wrapper,
  AvatarBox,
  Me,
  InfoBox,
  InfoTextWrapper,
  HeroSubtitle,
  HeroName,
  HeroRole,
  ButtonsSpace,
  Arrow,
} from './Hero.styles';

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
        <Me width='237px' height='703px' src={meImg} />
      </AvatarBox>
      <InfoBox>
        <InfoTextWrapper>
          <HeroSubtitle level={2}>{t('Hi, I am')}</HeroSubtitle>
          <HeroName level={1}>{t('Dmitrii Khoperskii')}</HeroName>
          <HeroRole level={4}>{t('Frontend Developer')}</HeroRole>
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
              href='https://www.linkedin.com/in/dimahoperskiy/'
              size='large'
              icon={<SiLinkedin />}
            />
          </ButtonsSpace>
        </InfoTextWrapper>
      </InfoBox>
      <Arrow onClick={handleScroll} />
    </Wrapper>
  );
};

export default Hero;
