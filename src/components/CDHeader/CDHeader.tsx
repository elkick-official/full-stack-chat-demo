import React, { FunctionComponent } from 'react'
import { Video, CallAdd } from 'iconsax-react'
import CDUserProfile from '../CDUserProfile/CDUserProfile'
import user2 from '../../assets/images/users/user-2.png'
import headerStyle from './header.module.css'

const CDHeader: FunctionComponent = () => {
  return (
    <div
      className={`${headerStyle.headerWrapper} p-3 d-flex align-items-center justify-content-between w-100`}
    >
      <div className={`d-flex align-items-center w-100`}>
        <CDUserProfile src={user2} alt={'user-profile-2'} />
        <div className={`${headerStyle.userInfo} ms-2`}>
          <h2 className={`${headerStyle.userName}`}>Nikunj Ravaliya</h2>
          <span>Online</span>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span
          className={`${headerStyle.headerIcon} d-flex align-items-center justify-content-center`}
        >
          <Video size="20" color="#000000" />
        </span>
        <span
          className={`${headerStyle.headerIcon} d-flex align-items-center justify-content-center ms-1`}
        >
          <CallAdd size="20" color="#000000" />
        </span>
      </div>
    </div>
  )
}

export default CDHeader
