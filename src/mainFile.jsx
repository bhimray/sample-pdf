import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';
import Introduction from './Introduction';
import Skill from './Skill';
import Certification from './Certification';
import Project from './Project';
import Experience from './Experience';
import Interest from './Interest';
import Research from './Research';

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: 'row',
    // backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={{display:"flex", flexDirection:"column",}}>
      <Header/>
      <Introduction/>
      <Skill/>
      <Certification/>
    </Page>
    <Page size="A4" syle={styles.page}>
      <Project/>
      <Experience/>
    </Page>
    <Page size="A4" syle={styles.page}>
      <Research/>
      <Interest/>
    </Page>
  </Document>
);