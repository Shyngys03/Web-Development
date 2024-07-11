import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Создайте корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендеринг корневого компонента
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если вы хотите начать измерять производительность вашего приложения, передайте функцию
// чтобы логировать результаты (например, reportWebVitals(console.log))
// или отправить на анализ в какой-то сервис
reportWebVitals();
