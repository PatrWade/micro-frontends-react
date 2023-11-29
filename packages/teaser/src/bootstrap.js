import React from "react";
import { createRoot } from "react-dom/client";
import { Teasers } from "./components/teasers";

// local micro frontend development
if (process.env.NODE_ENV === "development") {
  document.body.innerHTML = '<div id="teasers-dev-root"></div>';

  const root = createRoot(document.querySelector("#teasers-dev-root"));

  root.render(<Teasers />);
}

// export for container
export { Teasers };
