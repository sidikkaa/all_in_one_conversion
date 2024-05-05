import React, { useState } from 'react';
import { Document, Page, View, Image, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    maxWidth: '100%', // Set the maximum width to ensure the image fits within the container
    height: 'auto', // Maintain aspect ratio
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

const ImageDocument = ({ imageData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.imageContainer}>
        <Image src={imageData} style={styles.image} />
      </View>
    </Page>
  </Document>
);

const ImageToPDF = () => {
  const [imageData, setImageData] = useState<string | null>(null);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setImageData(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <button className="conversion-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-2 rounded-md">
            Convert Image to PDF
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileUpload} className="mt-4" />
          {imageData && (
            <PDFDownloadLink document={<ImageDocument imageData={imageData} />} fileName="image_to_pdf.pdf">
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

export default ImageToPDF;
