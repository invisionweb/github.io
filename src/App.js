import React, { Component } from "react";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from './redux/Store'; 
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                <div>
                <Header />
                
                <Footer />
                </div>
                   
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
