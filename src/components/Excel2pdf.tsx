import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import * as XLSX from 'xlsx';
import Image from 'next/image'; // Importing Next.js Image component if using Next.js
import excelToPdfImage from './excelToPdfImage.png'; // Import the image

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  table: {
    flexDirection: 'column', // Simulates a table by arranging rows in a column
  },
  tableRow: {
    flexDirection: 'row', // Arranges columns in a row
  },
  tableCol: {
    flex: 1, // Distributes columns evenly
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 5, // Unified margin for top and bottom
  },
  imageContainer: {
    width: '100%', // Container width
    marginBottom: 20, // Margin below the image
  },
});

// Define the type for the rows prop
type ExcelDocumentProps = {
  rows: string[][];
};

const ExcelDocument: React.FC<ExcelDocumentProps> = ({ rows }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        {rows.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.tableCol}>
                <Text style={styles.tableCell}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const Excel2PDF = () => {
  const [rows, setRows] = useState<string[][]>([]); // Explicitly type the state

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const workbook = XLSX.read(e?.target?.result as string, { type: 'binary' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data: string[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setRows(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Using Next.js Image component */}
        <div style={styles.imageContainer}>
          <Image src={excelToPdfImage} alt="Excel to PDF" layout="responsive" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <button className="conversion-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Convert Excel to PDF
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} className="mt-4" />
          {rows.length > 0 && (
            <PDFDownloadLink document={<ExcelDocument rows={rows} />} fileName="converted.pdf">
              {({ loading }) => (
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-4">
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

export default Excel2PDF;


export default Excel2PDF;


