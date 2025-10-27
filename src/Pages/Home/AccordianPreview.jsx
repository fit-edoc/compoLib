import React from 'react';
import { useParams } from 'react-router-dom';
import Accordian1 from '../Accordian/Accordian1.jsx';
import Accordian2 from '../Accordian/Accordian2.jsx';
import { accordianTemplates } from '../../components/accordianTemplates/accordianTemplates.js';

const previewComponents = {
  1: <Accordian1 />,
  2: <Accordian2 />,
};

const AccordianPreview = () => {
  const { id } = useParams();
  const Component = previewComponents[id];

  const handleDownload = () => {
    const generateCode = accordianTemplates[id];
    if (!generateCode) {
      alert('Template not found!');
      return;
    }

    // Get the code string
    const code = generateCode();

    // Create a blob from the code
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    // Create a hidden download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `Accordian${id}.jsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!Component)
    return <div className="p-8 text-red-500">Accordion Not Found</div>;

  return (
    <div className="mainhero min-h-screen p-8 space-y-10">
      <div className="min-h-0 border rounded-lg overflow-visible shadow bg-gray-100">
        {Component}
      </div>

      <button
        onClick={handleDownload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Download Template
      </button>
    </div>
  );
};

export default AccordianPreview;
