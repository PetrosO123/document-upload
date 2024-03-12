import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./RightMain.css";
import { useState } from "react";

function RightMain() {
  const clients = ["Amsterdam", "London", "New York", "Paris"];
  const centers = [];
  const [leaf, setLeaf] = useState(null);
  const [selected, setSelected] = useState(Array(4).fill(null));

  const dropDownLeaf = (index) => {
    leaf !== null ? setLeaf(null) : setLeaf(index);
  };

  const selectClient = (client, i) => {
    const copy = [...selected];
    copy[i] = client;
    setSelected(copy);
    console.log("i triggered: ", i);
    setLeaf(null);
  };
  for (let i = 0; i <= 3; i++) {
    centers.push(
      <div key={i} className="TCRow">
        <div className="TC">Testing Center {i + 1}</div>
        <div className="dropDownContainer">
          <div className="clientForm" onClick={() => dropDownLeaf(i)}>
            {selected[i] ? selected[i] : "Select Client"}
            <div className={leaf === i ? "arrow up" : "arrow down"}></div>
          </div>
          {leaf === i ? (
            <div
              className={
                leaf === i ? "active dropdownContent" : "dropdownContent"
              }
            >
              {clients.map((client) => (
                <div
                  key={client}
                  className="dropdownItem clientOption"
                  onClick={() => selectClient(client, i)}
                >
                  {client}
                </div>
              ))}
            </div>
          ) : null}
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
