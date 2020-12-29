import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import Main from './pages/main/Main';
import AddAluno from './pages/addAluno/AddAluno'
import reportWebVitals from './reportWebVitals';
import Header from './visual_components/header/Header';
import Footer from './visual_components/footer/Footer';

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/add-aluno" component={AddAluno} />
        </Switch>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
