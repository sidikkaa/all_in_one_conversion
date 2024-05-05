import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument } from 'pdf-lib';

const PdfToWord = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        setFileData(pdfData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const convertToWord = async () => {
    try {
      if (fileData) {
        const pdfDoc = await PDFDocument.load(fileData);
        const wordBytes = await pdfDoc.saveAsBase64({ dataUri: true });
        saveAs(wordBytes, 'converted.docx');
      }
    } catch (error) {
      console.error('Error converting PDF to Word:', error);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <button className="conversion-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-md">
            Convert PDF to Word
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <input type="file" accept=".pdf" onChange={handleFileUpload} className="mt-4" />
          {fileData && (
            <button onClick={convertToWord} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-4">
              Convert to Word
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PdfToWord;

