import React, { useState } from 'react';

const CodeGenerator = () => {
  const [text, setText] = useState('Your Hero Text Here');
  const [imageUrl, setImageUrl] = useState('');

  const handleDownload = () => {
    const componentCode = `import React from 'react';

const HeroComponent = () => (
  <section className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            ${text}
          </h1>
        </div>
        ${imageUrl ? `<div className="md:w-1/2">
          <img 
            src="${imageUrl}" 
            alt="Hero" 
            className="rounded-lg shadow-xl" 
          />
        </div>` : ''}
      </div>
    </div>
  </section>
);

export default HeroComponent;
`;

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

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto mt-8 space-y-10">
      
      {/* Inputs */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hero Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Paste image URL here"
          />
        </div>

        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Download Component Code
        </button>
      </div>

      {/* Live Preview */}
      <div className="border rounded-md p-6 bg-gray-100">
        <section className="min-h-[300px] flex items-center justify-center bg-white rounded-lg shadow">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                  {text}
                </h1>
              </div>
              {imageUrl && (
                <div className="md:w-1/2">
                  <img
                    src={imageUrl}
                    alt="Hero"
                    className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CodeGenerator;
