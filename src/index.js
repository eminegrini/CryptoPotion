import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";


const APP_ID = "jrH2J3MBvmgvR7zBtXTf43nxYIo3icZHZgdY8cO8";
const SERVER_URL = "https://oe6km2jjps61.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
    <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
