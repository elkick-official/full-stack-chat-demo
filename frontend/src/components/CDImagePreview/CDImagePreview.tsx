import React, { FunctionComponent } from "react";
import { Image } from "react-bootstrap";
import imagePreviewStyle from "./imagePreview..module.css";
interface ICDImagePreviewProps {
  base64Data: string;
  parentClassName?: string;
  imageClassName?: string;
}

const CDImagePreview: FunctionComponent<ICDImagePreviewProps> = (props) => {
  const { base64Data } = props;
  return (
    <div className={`${imagePreviewStyle.imagePreviewWrapper} my-3 w-100`}>
      <Image
        src={base64Data}
        fluid
        className={`${imagePreviewStyle.image} h-100 mx-auto d-block object-fit-contain`}
      />
    </div>
  );
};

export default CDImagePreview;
