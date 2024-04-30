// import ReactDOM from "react-dom/client";
import ReactDom from "react-dom";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
// import Home from "./components/pages/Home.jsx";
// import CaseStudy from "./components/pages/CaseStudy.jsx";
// import Team from "./components/pages/Team.jsx";

import "./assets/styles/fonts.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/case-study",
//         element: <CaseStudy />,
//       },
//       {
//         path: "/team",
//         element: <Team />,
//       },
//       {
//         path: "/*",
//         element: (
//           <div>
//             There is no content located at this page. Please return to the home
//             page via the logo in the header above.
//           </div>
//         ),
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
