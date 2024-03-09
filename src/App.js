import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="close">X</div>
      <header>Document Upload</header>
      <main>
        <div className="leftMain">
          <div className="importName">Select Import Name:</div>
          <hr />
          <div className="importManifest">
            <div className="manifestTitle">
              Select a manifest you'd like to import
            </div>
          </div>
          <hr />
          <div className="dataChecking">
            <div className="dataTitle">Elapse Data Checking</div>
            <div className="dataSubtitle">No Elapsed Dates!</div>
          </div>
          <hr />
          <div className="tolerance">
            <div className="title">Tolerance Window:</div>
            <div className="toleranceContainer">
              <div className="toggleLeft">
                <div className="toggleImage"></div>
                <div className="toggleText">Toggle ON</div>
              </div>
              <div className="toleranceDivider">|</div>
              <div className="toggleRight">
                <div className="clock"></div>
                <div className="toleranceLevel">Select Tolerance Level</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightMain"></div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
