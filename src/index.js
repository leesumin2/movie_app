import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
    // App 컴포넌트를 아이디어가 root인 엘리먼트에 그린다.(ReactDom)
);