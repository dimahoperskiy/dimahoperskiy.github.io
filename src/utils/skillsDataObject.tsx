import { Skill } from '../types/common';
import {
  SiAntdesign,
  SiCss3,
  SiEslint,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNodedotjs,
  SiOpenlayers,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiSpring,
  SiStyledcomponents,
  SiThreedotjs,
  SiTypescript,
  SiWebpack,
  SiAxios,
  SiLinux,
} from 'react-icons/si';
import React from 'react';

enum skillsEnum {
  javaScript = 'javaScript',
  typeScript = 'typeScript',
  react = 'react',
  redux = 'redux',
  html = 'html',
  css = 'css',
  styledComponents = 'styledComponents',
  sass = 'sass',
  mui = 'mui',
  webpack = 'webpack',
  eslint = 'eslint',
  git = 'git',
  nodeJs = 'nodeJs',
  reactRouter = 'reactRouter',
  python = 'python',
  spring = 'spring',
  express = 'express',
  graphQl = 'graphQl',
  threeJs = 'threeJs',
  reactQuery = 'reactQuery',
  antDesign = 'antDesign',
  openLayers = 'openLayers',
  postgresql = 'postgresql',
  axios = 'axios',
  linux = 'linux',
}

const skillsDataObject: { [key in skillsEnum]: Skill } = {
  javaScript: {
    icon: <SiJavascript />,
    label: 'JavaScript',
    color: '#efdb50',
  },
  typeScript: {
    icon: <SiTypescript />,
    label: 'TypeScript',
    color: '#007acc',
  },
  react: {
    icon: <SiReact />,
    label: 'React',
    color: '#61dafb',
  },
  redux: {
    icon: <SiRedux />,
    label: 'Redux',
    color: '#764abc',
  },
  html: {
    icon: <SiHtml5 />,
    label: 'HTML5',
    color: '#e44d27',
  },
  css: {
    icon: <SiCss3 />,
    label: 'CSS3',
    color: '#1472b6',
  },
  styledComponents: {
    icon: <SiStyledcomponents />,
    label: 'styled components',
    color: '#d76b8d',
  },
  sass: {
    icon: <SiSass />,
    label: 'Sass',
    color: '#cb6699',
  },
  mui: {
    icon: <SiMui />,
    label: 'MUI',
    color: '#027bf7',
  },
  webpack: {
    icon: <SiWebpack />,
    label: 'Webpack',
    color: '#8acef2',
  },
  eslint: {
    icon: <SiEslint />,
    label: 'ESLint',
    color: '#4338b6',
  },
  git: {
    icon: <SiGit />,
    label: 'Git',
    color: '#f03c2d',
  },
  nodeJs: {
    icon: <SiNodedotjs />,
    label: 'Node.js',
    color: '#619957',
  },
  reactRouter: {
    icon: <SiReactrouter />,
    label: 'React Router',
    color: '#f44250',
  },
  python: {
    icon: <SiPython />,
    label: 'Python',
    color: '#3a72a1',
  },
  spring: {
    icon: <SiSpring />,
    label: 'spring',
    color: '#6db33d',
  },
  express: {
    icon: <SiExpress />,
    label: 'Express',
    color: '#545454',
  },
  graphQl: {
    icon: <SiGraphql />,
    label: 'GraphQL',
    color: '#dd34a6',
  },
  threeJs: {
    icon: <SiThreedotjs />,
    label: 'three.js',
    color: '#111',
  },
  reactQuery: {
    icon: <SiReactquery />,
    label: 'React Query',
    color: '#f73e51',
  },
  antDesign: {
    icon: <SiAntdesign />,
    label: 'Ant Design',
    color: '#0f71ff',
  },
  openLayers: {
    icon: <SiOpenlayers />,
    label: 'OpenLayers',
    color: '#35b6c8',
  },
  postgresql: {
    icon: <SiPostgresql />,
    label: 'PostgreSQL',
    color: '#306793',
  },
  axios: {
    icon: <SiAxios />,
    label: 'Axios',
    color: '#5729dd',
  },
  linux: {
    icon: <SiLinux />,
    label: 'Linux',
    color: '#f6bf04',
  },
};

export default skillsDataObject;
