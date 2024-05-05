import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import mammoth from 'mammoth';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: 5,
    cursor: 'pointer',
    marginTop: 20,
  },
});

const WordToPDF = () => {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const { value } = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(value);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const PDFDocument = ({ htmlContent }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {parseHTMLContent(htmlContent)}
        </View>
      </Page>
    </Document>
  );

  const parseHTMLContent = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    return Array.from(div.childNodes).map((node, index) => (
      <Text key={index} style={styles.paragraph}>
        {node.textContent}
      </Text>
    ));
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <button className="conversion-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-md">
            Convert Word to PDF
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <input type="file" accept=".docx" onChange={handleFileUpload} className="mt-4" />
          {htmlContent && (
            <PDFDownloadLink document={<PDFDocument htmlContent={htmlContent} />} fileName="converted.pdf">
              {({ loading }) => (
                <button style={styles.button}>
                  {loading ? 'Loading document...' : 'Download PDF'}
                </button>
              )}
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default WordToPDF;
