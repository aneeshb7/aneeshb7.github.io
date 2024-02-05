import React from 'react';
import { Document, Page } from 'react-pdf';

import ABResume from '../assets/Aneesh Bulusu Resume.pdf';

export default function Resume() {
  return (
    <Document file={ABResume}>
      <Page pageNumber={1} />
    </Document>
  );
}