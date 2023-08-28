import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);


//not supported in React18 anymore
//ReactDOM.render(<App />, document.getElementById("root"));