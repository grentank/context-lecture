import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PostContextProvider from './components/Contexts/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PostContextProvider>
    <App />
  </PostContextProvider>,
);
