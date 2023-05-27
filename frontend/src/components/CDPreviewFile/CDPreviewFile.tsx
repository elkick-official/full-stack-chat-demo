import React, { FunctionComponent, useMemo } from "react";
import CDPdfPreview from "../CDPdfPreview/CDPdfPreview";
import CDVideoPreview from "../CDVideoPreview/CDVideoPreview";
import CDImagePreview from "../CDImagePreview/CDImagePreview";
import CDPreviewDoc from "../CDPreviewDoc/CDPreviewDoc";
interface ICDPriviewFileProps {
  fileType: string;
  fileSource: string;
  fileName: string;
}

const CDPreviewFile: FunctionComponent<ICDPriviewFileProps> = (props) => {
  const { fileType, fileSource, fileName } = props;
  const identifyingFileTypes = (fileSource: string, fileType: string) => {
    switch (fileType) {
      case "webp":
      case "png":
      case "jpeg":
      case "jpg":
        return <CDImagePreview base64Data={fileSource} />;
      case "pdf":
        return <CDPdfPreview file={fileSource} />;
      case "mp4":
        return <CDVideoPreview videoUrl={fileSource} />;
      case "rtf":
      case "doc":
      case "docx":
        return <CDPreviewDoc fileType={fileType} color="#00539B" />;
      case "csv":
      case "xls":
      case "xlsx":
        return <CDPreviewDoc fileType={fileType} color="#0B7B41" />;
      default:
        return <CDPreviewDoc fileType={fileType} color="#737A80" />;
    }
  };
  const previewFiles = useMemo(
    () => identifyingFileTypes(fileSource, fileType),
    [fileSource, fileType]
  );

  return <>{previewFiles}</>;
};

export default CDPreviewFile;
