import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { worker } from "./mocks/worker.js";

import App from "./App";

async function main() {
  await worker.start({
    findWorker: (scriptURL, _mockServiceWorkerUrl) => scriptURL.includes("mockServiceWorker")
  })

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  ); 
}

main();


