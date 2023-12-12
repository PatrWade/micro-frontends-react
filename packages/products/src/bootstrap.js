import React from "react";
import { createRoot } from "react-dom/client";
import { Products } from "./components/products";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#products-dev-root");

  if (devRoot) {
    const root = createRoot(devRoot);

    root.render(<Products />);
  }
}

export { Products };
