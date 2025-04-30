import React from "react";

export const ColorPalleteTab = ({setColors}) => {
  const Colors = [
    { primary: "#547792", secondary: "#F6F1DE" },
    { primary: "#B2A5FF", secondary: "#DBD3D3" },
    { primary: "black", secondary: "#5F8B4C" },
  ];
  return (
    <div className="relative bg-black   backdrop-blur-2xl h-[50px] w-screen py-3">
      <div className="absolute left-[40%] mx-auto flex justify-center items-center gap-4">
        {Colors.map((item, idx) => (
          <div className="h-[30px] w-[50px] border-2 border-white  rounded-full  flex"  key={idx} onClick={()=>setColors({primary:item.primary,secondary:item.secondary})}>
            <div
              className="h-full w-[25px] rounded-l-full"
              style={{ backgroundColor: item.primary }}
            ></div>
            <div className="h-full w-[25px] rounded-e-full" style={{backgroundColor:item.secondary}}> </div>
          </div>
        ))}
      </div>
    </div>
  );
};
