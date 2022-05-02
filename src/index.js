import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import Main from "./Main";
import About from "./components/About";
import {ThemeProvider} from "./redux/actions/Theme";

ReactDOM.render(
    <ThemeProvider>
    <BrowserRouter>
        <Provider store={configureStore()}>
            <Routes>
                <Route path={"/"}  element={<App/>}>
                    <Route index element={<Main/>}/>
                    <Route path ={"about"} element={<About/>}/>
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
    </ThemeProvider>

    ,
    document.getElementById('root')
);
