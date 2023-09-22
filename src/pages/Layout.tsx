import React from 'react';
import { FloatButton } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledFloatButton = styled(FloatButton)`
  top: 15px;
  @media (max-width: 800px) {
    right: 10px;
    top: 10px;
  }
`;

const Layout = () => {
  const { i18n } = useTranslation();
  let countryCode = 'GB';
  if (i18n.language === 'en') {
    countryCode = 'RU';
  }
  const handleLanguageSwitcherClick = () => {
    let languageToSwitch = 'en';
    if (i18n.language === 'en') {
      languageToSwitch = 'ru';
    }
    localStorage.setItem('dimahoperskiy-language', languageToSwitch);
    i18n.changeLanguage(languageToSwitch);
  };

  return (
    <>
      <StyledFloatButton
        onClick={handleLanguageSwitcherClick}
        icon={<ReactCountryFlag countryCode={countryCode} />}
      />
      <Outlet />
    </>
  );
};

export default Layout;
