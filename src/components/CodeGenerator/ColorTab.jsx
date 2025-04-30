import React, { useState } from 'react';

export const ColorTab = ({ setColor }) => {
  const colorTab = [
    { bg: "#72e980" },
    { bg: "#661ce7" },
    { bg: "#dceb51" },
  ];

  return (
    <div className='relative bg-black   backdrop-blur-2xl h-[50px] w-screen py-3'>
      <div className="absolute left-[40%] flex justify-center items-center">
        {colorTab.map((item, idx) => (
          <button
            key={idx}
            className="px-3 py-2"
            style={{ backgroundColor: item.bg }}
            onClick={() => setColor(item.bg)} // Update the color state in Footer1
          >
            {item.bg}
          </button>
        ))}
      </div>
    </div>
  );
};
