import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Feed from "./Feed";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreatePost from "./CreatePost";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Router>
        <Routes>
            <Route path='/feed' element={<Feed userId="5bb739ff-fab4-4eda-adcc-54c0efd6d337"/>} />
            <Route path='/create' element={<CreatePost userId="5bb739ff-fab4-4eda-adcc-54c0efd6d337" />} />
        </Routes>
    </Router>

    /*<Post name="John Doe" subject="Snowy Mountain"
          url="https://api.five-lions-e6156.com/v1/image/21faa3b1-a16d-44fb-adeb-9632864bad0b"/>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
