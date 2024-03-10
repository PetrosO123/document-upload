import "./App.css";
import * as React from "react";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";

function App() {
  return (
    <div className="App">
      <div className="close">X</div>
      <header>
        Document Upload
        <hr></hr>
      </header>
      <main>
        <LeftMain />
        <RightMain />
      </main>
      <footer>
        <div className="footerTitle">
          Data in the import file is correct. Please press Continue to import.
        </div>
        <div className="footerButtons">
          <div className="continue">Continue Import</div>
          <div className="cancel">Cancel</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
