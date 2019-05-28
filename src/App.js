import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from     "./components/Header";
import Main from    './components/Main';
import PrettierTest from './components/PrettierTest';

function App() {
  return (
    <div className="App">
      <PrettierTest          />
      <Header      />
      <Main />
    </div>
  );
}

export default App;
