import React from "react";
import { createRoot } from "react-dom/client";
import { NavigationCart } from "./components/navigation-cart";

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#checkout-dev-root");

  if (devRoot) {
    const root = createRoot(devRoot);

    root.render(<NavigationCart />);
  }
}

export { NavigationCart };
