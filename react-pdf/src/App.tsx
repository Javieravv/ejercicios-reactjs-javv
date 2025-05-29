import './App.css'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import type { PDFDocumentProxy } from 'pdfjs-dist'
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null;

function App() {
  const [file, setFile] = useState<PDFFile>('archivo1.pdf');
  // const [numPages, setNumPages] = useState<number>();
  // const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  // const [containerWidth, setContainerWidth] = useState<number>();

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }

  return (
    <>
      <h1>
        React PDF
      </h1>
      <div className="document-pdf">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options} />
      </div>

    </>
  )
}

export default App
