import Head from "next/head";
import _ from "lodash";
// import * as pdfMake from "pdfmake/build/pdfmake";
// const pdfMake = require('pdfmake/build/pdfmake.js');

  

// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
// import {dd} from '../data/pdfmakeDefinitions';


import * as React from 'react';
// import MishnahMethod from "../components/MishnahMethod";

import {
    PDFDocument,
    PDFText,
    PDFTable,
    PDFTableRow,
    PDFTableColumn,
    PDFColumn,
    PDFColumns,
    pdf,
  } from 'react-pdfmake';

export interface IMishnahProps {
}

export default function Mishnah (props: IMishnahProps) {
    console.log(props)

    const file = React.useMemo(() => {
        return pdf(
          <PDFDocument
            pageSize="A5"
            pageOrientation="portrait"
            pageBreakBefore={(currentNode, followingNodesOnPage) => {
              return (
                currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0
              );
            }}
            styles={{
              header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10],
              },
              subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5],
              },
              tableExample: {
                margin: [0, 5, 0, 15],
              },
              tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black',
              },
            }}
          >
            <PDFText style="subheader">Headers</PDFText>
            You can declare how many rows should be treated as a header. Headers are
            automatically repeated on the following pages
            <PDFText color="gray" italics>
              Headers
            </PDFText>
            <PDFColumns columnGap={10}>
              <PDFColumn width="*">Hi</PDFColumn>
              <PDFColumn width="auto">Hi</PDFColumn>
            </PDFColumns>
            <PDFTable
              headerRows={1}
              style="tableExample"
              pageOrientation="landscape"
              pageBreak="before"
            >
              <PDFTableRow>
                <PDFTableColumn style="tableHeader">Header 1</PDFTableColumn>
                <PDFTableColumn style="tableHeader">Header 2</PDFTableColumn>
                <PDFTableColumn style="tableHeader">Header 3</PDFTableColumn>
              </PDFTableRow>
              <PDFTableRow>
                <PDFTableColumn>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum PDF dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum
                </PDFTableColumn>
                <PDFTableColumn>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum
                </PDFTableColumn>
                <PDFTableColumn>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum
                </PDFTableColumn>
              </PDFTableRow>
            </PDFTable>
          </PDFDocument>
        );
      }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Mishnah | How Church Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl">Create Your Mishnah PDF</h1> 
          
         
    
        <button className="bg-green font-semibold text-white p-2 w-32 rounded-full hover:bg-green focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2" onClick={() => file.open()}>Generate PDF</button>
      </main>
      </div>
  );
}
