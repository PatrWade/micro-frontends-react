import React from "react";
import { createRoot } from "react-dom/client";
import { Teasers } from "./components/teasers";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#teaser-dev-root");

  if (devRoot) {
    const root = createRoot(devRoot);

    root.render(<Teasers />);
  }
}

export { Teasers };
