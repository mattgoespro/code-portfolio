import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app/Router";
import AnimationOnScroll from "aos";
import "aos/dist/aos.css";

// init animation library
AnimationOnScroll.init();

const appRoot = document.getElementById("root");

createRoot(appRoot).render(<RouterProvider router={router} />);

// Scroll to top on page refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
