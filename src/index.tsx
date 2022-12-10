import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Post from "./Post";
import Feed from "./Feed";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Feed userId="5bb739ff-fab4-4eda-adcc-54c0efd6d337" />

    /*<Post name="John Doe" subject="Snowy Mountain"
          url="https://api.five-lions-e6156.com/v1/image/21faa3b1-a16d-44fb-adeb-9632864bad0b"/>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
