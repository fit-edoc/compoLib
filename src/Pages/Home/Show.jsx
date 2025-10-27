import React, { useState } from "react";
import { HeroTab } from "./HeroTab";
import { FooterTab } from "../Home/FooterTab";
import { AccordianTab } from "./AccordianTab";

const tabData = {
  Hero: {
    label: "Hero",
    component: <HeroTab />,
  },
  Footer: {
    label: "Footer",
    component: <FooterTab />,
  },
  Accordian:{
    label:"Accordian",
    component:<AccordianTab/>
  }
};

export const Show = () => {
  const [activeTab, setActiveTab] = useState("Hero"); // Match the tab key exactly (case-sensitive)

  return (
    <div className="min-h-screen w-screen bg-black">
      {/* Top Navigation */}
      <div className="h-[70px] w-full bg-gradient-to-bl from-[#234528] to-[#fff2] flex gap-3 justify-center items-center px-2">
        {Object.entries(tabData).map(([key, { label }]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`py-2 px-5 rounded-full font-medium transition-colors duration-200 
              ${activeTab === key ? "bg-gradient-to-r from-slate-500 to-green-900 text-white border-b-2 border-white" : "bg-gradient-to-r from-slate-500 to-green-900 text-white hover:bg-green-600"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Component Renderer */}
      <div className="mainhero min-h-[calc(100vh-100px)] w-full relative  p-8">
        {tabData[activeTab]?.component}
      </div>
    </div>
  );
};
