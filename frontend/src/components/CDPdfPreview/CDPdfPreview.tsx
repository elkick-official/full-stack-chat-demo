import React, { FunctionComponent, useState, useMemo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import CDLoader from "../CDLoader/CDLoader";
import pdfPreviewStyle from "./pdfPreview.module.css";
import { base64toBlob } from "../../services";
import { isValidURLWithIPAddress } from "../../services/common.service";
interface IPDFPreviewProps {
  file: string;
}
const CDPdfPreview: FunctionComponent<IPDFPreviewProps> = (props) => {
  const { file } = props;
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [isNavVisible, setNavVisible] = useState<boolean>(true);

  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prevPageNumber) =>
      Math.min(prevPageNumber + 1, numPages || 1)
    );

  const documentUrl = useMemo(() => {
    if (isValidURLWithIPAddress(file)) {
      setNavVisible(false);
      return file;
    } else {
      return URL.createObjectURL(
        base64toBlob("data:application/pdf;base64,", file)
      );
    }
  }, [file]);

  return (
    <>
      <Document
        file={documentUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className={`${pdfPreviewStyle.pdfCustomWrapper} d-flex align-items-center justify-content-center mt-3`}
        loading={<CDLoader />}
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          height={400}
        />
      </Document>
      {isNavVisible ? (
        <nav
          className={`d-flex align-items-center justify-content-center my-3 rounded-3 overflow-hidden ${pdfPreviewStyle.pdfNavLinks}`}
        >
          <button onClick={goToPrevPage} className="p-3 ">
            <ArrowLeft2 size="16" color="#000000" />
          </button>
          <p className="mb-0 mx-3">
            {pageNumber} of {numPages}
          </p>
          <button onClick={goToNextPage} className="p-3">
            <ArrowRight2 size="16" color="#000000" />
          </button>
        </nav>
      ) : null}
    </>
  );
};

export default CDPdfPreview;
