import styled from 'styled-components';
import { Typography, Space } from 'antd';
import { AiOutlineArrowDown } from 'react-icons/ai';

const { Title } = Typography;

export const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  background-color: #d7d7d7;

  @media (max-width: 800px) {
    flex-direction: column;

    h1 {
      font-size: 2em;
      margin-top: 10px;
    }

    h2 {
      font-size: 1.5em;
    }
  }
`;

export const AvatarBox = styled.div`
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

export const Me = styled.img`
  position: absolute;
  bottom: 80px;
  right: 120px;

  @media (max-width: 800px) {
    position: unset;
    height: 55vh;
    width: auto;
  }
`;

export const InfoBox = styled.div`
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

export const InfoTextWrapper = styled.div`
  padding-left: 25%;

  @media (max-width: 800px) {
    padding: 20px;
    text-align: center;
  }
`;

export const HeroSubtitle = styled(Title)`
  margin-bottom: 5px;
`;

export const HeroName = styled(Title)`
  margin-top: 0 !important;
  margin-bottom: 5px;
`;

export const HeroRole = styled(Title)`
  margin-top: 0;
  font-weight: 400;
`;

export const ButtonsSpace = styled(Space)`
  margin-top: 100px;

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;

export const Arrow = styled(AiOutlineArrowDown)`
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

export const HHIcon = styled('img')`
  width: 18px;
  height: 18px;
`;
