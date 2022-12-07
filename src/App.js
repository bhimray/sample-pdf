import React from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer';
import { MyDocument } from './mainFile';

const styles = StyleSheet.create({
  download:{
    position:"absolute",
    display:"flex",
    bottom:"0rem",
    right:"0rem"
  }
  
})
export const App = () => (
  <>
    <PDFDownloadLink document={<MyDocument/>} fileName="FORM" style={styles.download}>
      {({loading})=>(loading ? <button>Loading...</button>:<button>Download</button>)}
    </PDFDownloadLink>
    <MyDocument/>
  </>
);

