import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from "./Routes";
import Header from './pages/Header'
import Aside from "./pages/Aside";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <div className="grid grid-cols-5  sm:grid-rows-5 md:grid-rows-6">
            <Aside/>
        <Routes/>
        </div>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
