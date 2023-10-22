import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';
import { Scroll } from 'components/Scroll/Scroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter">
      <App />
      <Scroll />
    </BrowserRouter>
    <Toaster />
    <GlobalStyle />
  </React.StrictMode>
);
