// src/contentScript.ts
import React from "react";
import ReactDOM from "react-dom";
import CommonSidebar from "./components/commonSidebar";
import FeatureA from "./components/FeatureA";
import { createRoot } from "react-dom/client";
import Search from "./components/SearchComponent";
import { Box } from "@mui/material";

// Determine the website or conditions for feature injection
const isFeatureRequired = true; // Replace with your condition

const domNode = document.createElement("div");
domNode.id = "my-extension-root";

domNode.style.position = "fixed";
domNode.style.top = "0";
domNode.style.left = "0";
domNode.style.zIndex = "100000";
const root = createRoot(domNode);

root.render(
  <>
    <CommonSidebar
      children={
        <div className="w-64 bg-blue-500">
          {/* Search */}
          <Search />
          {/* Feature A content */}
          {isFeatureRequired && <FeatureA />}
        </div>
      }
    />
  </>
);

document.body.appendChild(domNode);
