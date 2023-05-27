import React, { FunctionComponent } from "react";
import userProfileStyle from "./userProfile.module.css";
import clsx from "clsx";
interface IUserProfileProps {
  src: string;
  alt: string;
  imageClassName?: string;
  parentClassName?: string;
  isActive?: boolean;
}

const CDUserProfile: FunctionComponent<IUserProfileProps> = (props) => {
  const { src, alt, imageClassName, parentClassName, isActive = false } = props;
  return (
    <div
      className={clsx([parentClassName, userProfileStyle.userProfileParent], {
        [userProfileStyle.userProfileActive]: isActive,
      })}
    >
      <img
        src={src}
        alt={alt}
        className={clsx([userProfileStyle.userImage, imageClassName])}
      />
    </div>
  );
};

export default CDUserProfile;
