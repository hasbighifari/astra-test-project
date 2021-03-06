import React from 'react';
import './App.css';
import NoAuthentication from './router/noAuthentication'
import DialogNotif from "./components/DialogNotif/index"

function App() {
  return (
    <div style={{ height: "100%", width: "100%", position: "relatif" }}>
      <NoAuthentication/>
      <DialogNotif/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
