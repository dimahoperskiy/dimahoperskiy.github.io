import './index.css';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/home';
import Layout from './pages/Layout';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ConfigProvider, ThemeConfig } from 'antd';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import { LoadingSpin } from './pages/project/Project.styles';
const Project = React.lazy(() => import('./pages/project/Project'));

const theme: ThemeConfig = {
  token: {
    fontFamily: 'Raleway',
    fontSize: 16,
    colorTextBase: '#fff',
  },
  components: {
    Button: {
      colorText: '#111',
      colorPrimaryHover: '#00dfff',
    },
    Timeline: {
      tailColor: '#2a2928',
    },
    Divider: {
      colorSplit: '#2a2928',
    },
  },
};

const language = localStorage.getItem('dimahoperskiy-language') || 'ru';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: language,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Suspense
        fallback={
          <LoadingSpin
            size='large'
            style={{ position: 'absolute', inset: 0 }}
          />
        }
      >
        <HashRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='project'>
                <Route path=':projectUrl' element={<Project />} />
                <Route path='' element={<Navigate to='/' />} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        </HashRouter>
      </Suspense>
    </ConfigProvider>
  );
};

const root = createRoot(document.getElementById('root') as Element);

root.render(<App />);
