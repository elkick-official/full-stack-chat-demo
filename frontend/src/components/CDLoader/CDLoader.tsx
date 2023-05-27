import React, { FunctionComponent } from "react";
import loaderStyle from "./loader.module.css";
import { clsx } from "clsx";

interface ICDLoaderProps {
  parentClassName?: string;
}
const CDLoader: FunctionComponent<ICDLoaderProps> = (props) => {
  const { parentClassName } = props;
  return (
    <div className={clsx([loaderStyle.ldsEllipsis, parentClassName])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CDLoader;
