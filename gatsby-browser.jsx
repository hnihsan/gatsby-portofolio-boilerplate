import './src/styles/global.css';
import React from 'react';
import Page from './src/components/Page';

// eslint-disable-next-line import/prefer-default-export
export function wrapPageElement({ element, props }) {
  return <Page {...props}>{element}</Page>;
}
