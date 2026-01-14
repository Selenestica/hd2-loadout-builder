import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoadoutsProvider } from "./context/Loadouts.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReceivedLoadoutModal from "./components/ReceiveLoadoutModal.jsx";
import Modal from "react-modal";
import { OverridesProvider } from "./context/Overrides.jsx";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadoutsProvider>
    <OverridesProvider>
      <BrowserRouter basename="/loadoutbuilder">
        <Routes>
          <Route path="/*" element={<App />}>
            <Route path="s" element={<ReceivedLoadoutModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </OverridesProvider>
  </LoadoutsProvider>
);
