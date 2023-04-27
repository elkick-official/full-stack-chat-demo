import React, { FunctionComponent } from 'react'
import userProfileStyle from './userProfile.module.css'

type UserProfileProps = {
  src: string
  alt: string
  imageClassName?: string
  parentClassName?: string
  isActive?: boolean
}

const CDUserProfile: FunctionComponent<UserProfileProps> = ({
  src,
  alt,
  imageClassName,
  parentClassName,
  isActive = false,
}) => {
  return (
    <div
      className={`${userProfileStyle.userProfileParent} ${
        isActive && userProfileStyle.userProfileActive
      } ${parentClassName} w-100`}
    >
      <img
        src={src}
        alt={alt}
        className={`${userProfileStyle.userImage} ${imageClassName}`}
      />
    </div>
  )
}

export default CDUserProfile
