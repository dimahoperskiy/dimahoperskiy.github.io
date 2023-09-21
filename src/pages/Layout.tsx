import React from 'react';
import { FloatButton } from 'antd';
import ReactCountryFlag from 'react-country-flag';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
      <FloatButton
        onClick={handleLanguageSwitcherClick}
        style={{ top: '15px' }}
        icon={<ReactCountryFlag countryCode={countryCode} />}
      />
      <Outlet />
    </>
  );
};

export default Layout;
