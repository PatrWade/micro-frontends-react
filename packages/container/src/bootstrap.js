import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

document.body.innerHTML = '<div id="container"></div>';

const root = createRoot(document.querySelector("#container"));
root.render(<App />);
