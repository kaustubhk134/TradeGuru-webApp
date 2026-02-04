import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./index.css";

// import Dashboard from "./components/Dashboard";
// import Summary from "./components/Summary";
// import Orders from "./components/Orders";
// import Holdings from "./components/Holdings";
// import Positions from "./components/Positions";
// import Funds from "./components/Funds";
// import Apps from "./components/Apps";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route index element={<Summary />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="holdings" element={<Holdings />} />
//           <Route path="positions" element={<Positions />} />
//           <Route path="funds" element={<Funds />} />
//           <Route path="apps" element={<Apps />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
