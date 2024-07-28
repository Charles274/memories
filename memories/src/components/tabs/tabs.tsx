"use client";
import React, { useState } from "react";
import "./TabStyles.css"; // Import CSS for styles

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index

  const handleTabClick = (index: number) => {
    setActiveTab(index); // Update active tab on click
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          className={`tab ${activeTab === 0 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
        </a>
      </div>

      <div className="tab-content">
        {activeTab === 0 && <div className="content">Content for Tab 1</div>}
        {activeTab === 1 && <div className="content">Content for Tab 2</div>}
        {activeTab === 2 && <div className="content">Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;
