import React from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./components/products";

// local micro frontend development
if (process.env.NODE_ENV === "development") {
  document.body.innerHTML = '<div id="products-dev-root"></div>';

  const root = createRoot(document.querySelector("#products-dev-root"));

  root.render(<Products />);
}

// export for container
export { Products };
