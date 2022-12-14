import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Feed from "./Feed";
import {BrowserRouter as Router, Route, Routes, useSearchParams} from "react-router-dom";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Profile from "./Profile";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/feed' element={<FeedFunction/>} />
            <Route path='/create' element={<PostFunction/>} />
            <Route path='/profile' element={<ProfileFunction/>}/>
        </Routes>
    </Router>
);

function FeedFunction() {
    const [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("userId")

    console.log(userId)

    return (
        <Feed userId={userId!} />
    )
}

function PostFunction() {
    const [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("userId")

    console.log(userId)

    return (
        <CreatePost userId={userId!}/>
    )
}

function ProfileFunction() {
    const [searchParams, setSearchParams] = useSearchParams();
    let userId = searchParams.get("userId")

    console.log(userId)

    return (
        <Profile userId={userId!}/>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
