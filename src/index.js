import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App /> 
  </StrictMode>
    // import App from './App'; <App /> => App 컴포넌트를 임포트하여 사용
    // App 컴포넌트를 아이디어가 root인 엘리먼트에 그린다.(ReactDom)
    // App 컴포넌트는 id가 root인 엘리먼트에 그려질 것이다.
);