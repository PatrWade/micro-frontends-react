import React from "react";
import { createRoot } from "react-dom/client";
import { NavigationCart } from "./components/navigation-cart";

// local micro frontend development
if (process.env.NODE_ENV === "development") {
  document.body.innerHTML = '<div id="checkout-dev-root"></div>';

  const root = createRoot(document.querySelector("#checkout-dev-root"));

  root.render(<NavigationCart />);
}

// export for container
export { NavigationCart };
