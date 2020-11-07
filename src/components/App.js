import React, {Component, useState} from "react";
import ReactDOM from 'react-dom';
import '../styles/App.css';

const App = () => {
  return (
    document.createElement('p').innerText = "I am learning React. My life is getting better."
  );
}
ReactDOM.render(App(), document.getElementById("root"));

export default App;
