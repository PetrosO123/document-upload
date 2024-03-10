import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArticleIcon from "@mui/icons-material/Article";
import "./LeftMain.css";
import { useState } from "react";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "white" : "rgb(4, 4, 90)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
    backgroundColor: "white",
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function LeftMain() {
  const [importName, setImportName] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImportName(file.name);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setImportName(file.name);
  };

  const triggerFileInputClick = () => {
    document.getElementById("fileUploadInput").click();
  };
  return (
    <div className="leftMain">
      <div className="importName">
        <div className="importText">
          Select Import Name: <span>{importName}</span>
        </div>
        <div className="arrow"></div>
      </div>
      <hr />
      <div className="importManifest">
        <div className="manifestTitle">
          Select a manifest you'd like to import
        </div>
        <div
          className="manifestSection"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="dragDrop">
            <ArticleIcon />
            <span>
              Drag & Drop Here Or <strong>Browse</strong>
            </span>
          </div>
          <div className="manifestUpload" onClick={triggerFileInputClick}>
            Upload Manifest
          </div>
          <input
            type="file"
            id="fileUploadInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <hr />
      <div className="dataChecking">
        <div className="dataTitle">Elapse Data Checking</div>
        <div className="dataSubtitle">No Elapsed Dates!</div>
      </div>
      <hr />
      <div className="tolerance">
        <div className="toleranceTitle">Tolerance Window:</div>
        <div className="toleranceContainer">
          <div className="toggleLeft">
            <div className="toggleImage">
              <Stack direction="row" spacing={1} alignItems="center">
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>Toggle ON</Typography>
              </Stack>
            </div>
          </div>
          <div className="toleranceDivider"></div>
          <div className="toggleRight">
            <div className="clock">
              <WatchLaterIcon />
            </div>
            <div className="toleranceLevel">Select Tolerance Level</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftMain;
