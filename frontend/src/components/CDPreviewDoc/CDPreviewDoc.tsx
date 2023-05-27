import React, { FunctionComponent } from "react";
import previewDocStyle from "./previewdoc.module.css";
import { clsx } from "clsx";
interface ICDPreviewDocProsp {
  fileType: string;
  color: string;
  parentClassName?: string;
  imageClassName?: string;
}

const CDPreviewDoc: FunctionComponent<ICDPreviewDocProsp> = (props) => {
  const { fileType, color, parentClassName, imageClassName } = props;

  return (
    <div className={clsx(["position-relative", parentClassName])}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx([imageClassName])}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M131.199 0H302.378L447.457 151.221V445.346C447.457 482.191 417.648 512 380.93 512H131.199C94.3539 512 64.5449 482.191 64.5449 445.346V66.6544C64.5443 29.809 94.3533 0 131.199 0Z"
          fill={color}
        />
        <path
          opacity="0.302"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M302.25 0V150.069H447.458L302.25 0Z"
          fill="white"
        />
      </svg>
      <span
        className={`${previewDocStyle.fileTypeStyle} position-absolute text-uppercase text-white`}
      >
        {fileType}
      </span>
    </div>
  );
};

export default CDPreviewDoc;
