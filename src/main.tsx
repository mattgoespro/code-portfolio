import AOS from "aos";
import "aos/dist/aos.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app/Router";

// Initialize animation engine on mount
AOS.init();

const appRoot = document.getElementById("root");

createRoot(appRoot).render(<RouterProvider router={router} />);

// Scroll to top on page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
