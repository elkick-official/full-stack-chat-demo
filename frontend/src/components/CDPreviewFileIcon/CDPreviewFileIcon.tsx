import React, { FunctionComponent, useMemo } from "react";
import CDUserProfile from "../CDUserProfile/CDUserProfile";
import imageIcon from "../../assets/images/icons/image.png";
import pdfIcon from "../../assets/images/icons/pdf.png";
import wordIcon from "../../assets/images/icons/word.png";
import xlsIcon from "../../assets/images/icons/xls.png";
import videoIcon from "../../assets/images/icons/video.svg";
import CDPreviewDoc from "../CDPreviewDoc/CDPreviewDoc";

interface ICDPriviewFileIconProps {
  fileType: string;
  fileName: string;
}

const CDPreviewFileIcon: FunctionComponent<ICDPriviewFileIconProps> = (
  props
) => {
  const { fileType, fileName } = props;
  const identifyingFileTypes = (fileType: string) => {
    switch (fileType) {
      case "webp":
      case "png":
      case "jpeg":
      case "jpg":
        return (
          <CDUserProfile
            src={imageIcon}
            alt={fileName}
            imageClassName={"rounded-0"}
            parentClassName={"icon-sm"}
          />
        );
      case "pdf":
        return (
          <CDUserProfile
            src={pdfIcon}
            alt={fileName}
            imageClassName={"rounded-0"}
            parentClassName={"icon-sm"}
          />
        );
      case "mp4":
        return (
          <CDUserProfile
            src={videoIcon}
            alt={fileName}
            imageClassName={"rounded-0"}
            parentClassName={"icon-sm"}
          />
        );
      case "rtf":
      case "doc":
      case "docx":
        return (
          <CDUserProfile
            src={wordIcon}
            alt={fileName}
            imageClassName={"rounded-0"}
            parentClassName={"icon-sm"}
          />
        );
      case "csv":
      case "xls":
      case "xlsx":
        return (
          <CDUserProfile
            src={xlsIcon}
            alt={fileName}
            imageClassName={"rounded-0"}
            parentClassName={"icon-sm"}
          />
        );
      default:
        return (
          <CDPreviewDoc
            fileType={fileType}
            color={"#737A80"}
            imageClassName="icon-sm"
          />
        );
    }
  };
  const previewFilesIcon = useMemo(
    () => identifyingFileTypes(fileType),
    [fileType]
  );
  return <>{previewFilesIcon}</>;
};

export default CDPreviewFileIcon;
