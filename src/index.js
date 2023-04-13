import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  { id: 1, message: "nice ", like: 1 },
  { id: 2, message: "good ", like: 12 },
  { id: 3, message: "super " },
  { id: 4, message: "omg " },
  { id: 5, message: "gz bro" },
]
let dialogs = [
  { id: 1, name: "Victor" },
  { id: 2, name: "Maila" },
  { id: 3, name: "John" },
  { id: 4, name: "Josua" },
  { id: 5, name: "Lora" },
]

let messagesData = [
  { message: 'Hello everybody' },
  { message: 'yo sup' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
