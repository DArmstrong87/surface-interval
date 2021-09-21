import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './Test';

export const MyPDF = () => {
return(
 <PDFViewer>
    <MyDocument />
  </PDFViewer>
)   
}

