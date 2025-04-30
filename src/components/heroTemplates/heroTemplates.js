export const heroTemplates = {
    1: ({ text, imageUrl }) => `
  import React from 'react';
  
  export const Hero1 = () => {
    return (
      <>
        <div className='min-h-screen w-screen bg-gradient-to-l from-[#646deb] to-[#0f053a] flex'>
          <div className='w-[50%] min-h-screen relative flex items-center justify-center'>
            <div className='h-[70vh] w-[40vw] rounded-lg bg-black/50 text-white px-5 text-start flex flex-col justify-evenly'>
              <h1 className='text-[6vw] font-medium'>${text}</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, consectetur modi! Totam, culpa officiis necessitatibus exercitationem a adipisci vitae omnis aliquid vero, quas laudantium earum. Optio nisi adipisci amet possimus!
              </p>
            </div>
          </div>
          <div className='w-[50%] min-h-screen relative flex items-center justify-center'>
            <div className='h-[70vh] w-[30vw] absolute bg-gradient-to-tr from-[#3a78c0] to-[#081938] rounded-blob'>
              <img src="${imageUrl}" className='h-full w-full object-contain' alt="Hero" />
            </div>
          </div>
        </div>
      </>
    );
  };
  `,
  };
  