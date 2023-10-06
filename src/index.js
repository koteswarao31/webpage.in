
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import Shopping from "./App";
import '../src/components/header'
import Header from "../src/components/header";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App></App>
);