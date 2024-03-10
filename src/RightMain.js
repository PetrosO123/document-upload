import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./App.css";
function RightMain() {
  const centers = [];
  for (let i = 1; i <= 4; i++) {
    centers.push(
      <div key={i} className="TCRow">
        <div className="TC">Testing Center {i}</div>
        <div className="clientForm">
          Select Client <div className="arrow"></div>
        </div>
        <WatchLaterIcon />
      </div>
    );
  }

  return (
    <div className="rightMain">
      <div className="topRight">
        <div className="split">
          <div className="splitTitle">
            Split schedule using social distancing?
          </div>
          <div className="radio-inline">
            <input type="radio" id="yes" name="split" value="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" id="no" name="split" value="no" />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <hr className="rightHr" />
        <div className="location">
          Location Checking
          <div className="available">All Available!</div>
        </div>
        <hr className="rightHr" />
        <div className="client">
          <div className="clientTitle">Client:</div>
          <div className="clientButtons">
            <input
              type="radio"
              id="single"
              name="clientOption"
              value="single"
            />
            <label htmlFor="single">Single</label>
            <input
              type="radio"
              id="multiple"
              name="clientOption"
              value="multiple"
            />
            <label htmlFor="multiple">Multiple</label>
          </div>
        </div>
      </div>
      <div className="bottomRight">
        <div className="TCRows">{centers}</div>
      </div>
    </div>
  );
}
export default RightMain;
