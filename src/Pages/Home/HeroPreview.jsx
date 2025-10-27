import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { heroTemplates } from '../../components/heroTemplates/heroTemplates.js';
import { Hero1 } from '../Hero/Hero1.jsx';
import { Hero2 } from '../Hero/Hero2.jsx';
import { Hero3 } from '../Hero/Hero3.jsx';
import { Elegant } from '../landingpages/Elegant.jsx';


const heroPreviewComponents = {
  1: <Hero1  />,
  2: <Hero2 />,
  3: <Hero3 />,
  4:<Elegant/>
};

const HeroPreview = () => {
  const { id } = useParams();
  const [text, setText] = useState('Your Hero Text Here');
  const [imageUrl, setImageUrl] = useState('');

  const handleDownload = () => {
    const generateCode = heroTemplates[id];
    if (!generateCode) return;

    const componentCode = generateCode({ text, imageUrl });
    const blob = new Blob([componentCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'HeroComponent.jsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const Component = heroPreviewComponents[id];

  if (!Component) return <div className="p-8 text-red-500">Hero Not Found</div>;

  return (
    <div className="mainhero p-8 space-y-10">
         <div className="border rounded-lg overflow-hidden shadow bg-gray-100 ">
        {Component}
      </div>
      <div className="space-y-4 max-w-2xl mx-auto bg-gradient-to-bl from-white to-black px-6 py-3 rounded-md backdrop-blur-3xl">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Hero Text"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download JSX
        </button>
      </div>

     

    </div>
  );
};

export default HeroPreview;
