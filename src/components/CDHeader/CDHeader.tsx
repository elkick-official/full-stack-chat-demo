import React, { FunctionComponent, useState } from 'react'
import { Video, CallAdd, MoreCircle, CloseCircle, Trash } from 'iconsax-react'
import { Dropdown } from 'react-bootstrap'
import CDUserProfile from '../CDUserProfile/CDUserProfile'
import user2 from '../../assets/images/users/user-2.png'
import headerStyle from './header.module.css'

const CDHeader: FunctionComponent = () => {
  const [isActive, setIsActive] = useState<any>(false)
  const handleOpenDrawer = () => setIsActive(true)
  const handleCloseDrawer = () => setIsActive(false)
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
        <Dropdown className={`${headerStyle.customDropDown} ms-1`}>
          <Dropdown.Toggle
            id="info-menu"
            variant="none"
            className={`${headerStyle.headerIcon}`}
          >
            <MoreCircle size="20" color="#000000" />
          </Dropdown.Toggle>
          <Dropdown.Menu className={`${headerStyle.customDropDownMenu} ms-1`}>
            <Dropdown.Item
              href="#/action-1"
              className="py-3 px-5"
              onClick={handleOpenDrawer}
            >
              Contact info
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              className="py-3 px-5"
              onClick={handleOpenDrawer}
            >
              Clear messages
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              className="py-3 px-5"
              onClick={handleOpenDrawer}
            >
              Delete chat
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div
        className={`${headerStyle.drawerRight} ${
          isActive ? headerStyle.drawerActive : ''
        } vertical-scroll`}
      >
        {/* <div className="position-relative"> */}
        <div
          className={`${headerStyle.drawerRightHeader} px-3 d-flex align-items-center box-shadow`}
        >
          <span
            className={`d-flex align-items-center justify-content-center cursor-pointer p-2`}
            onClick={handleCloseDrawer}
          >
            <CloseCircle size="24" color="#ffffff" />
          </span>
          <p className="m-0 text-center w-100">Contact Info </p>
        </div>
        <div className={`${headerStyle.drawerBody}`}>
          <div
            className={`${headerStyle.innerDrawerItem} d-flex align-items-center justify-content-center flex-column p-5 mb-2`}
          >
            <CDUserProfile
              src={user2}
              alt={'user-profile-2'}
              parentClassName={`${headerStyle.drawerUserImage}`}
            />
            <h2 className="mt-2">+91 8866032297</h2>
            <p className="m-0">~ Nikunj Ravaliya</p>
          </div>
          <div
            className={`${headerStyle.innerDrawerItem} d-flex align-items-center p-3 mb-2`}
          >
            <div
              className={`${headerStyle.aboutInfo} m-0 d-flex align-items-center`}
            >
              <span className="me-2">About :</span>
              <p className="m-0">Be nicer to your self.</p>
            </div>
          </div>
          <div
            className={`${headerStyle.innerDrawerItem} d-flex align-items-center p-3 mb-2`}
          >
            <div>Media, link and Docs</div>
          </div>
          <div
            className={`${headerStyle.innerDrawerItem} d-flex align-items-center p-3 `}
          >
            <div
              className={`${headerStyle.deleteInfo} d-flex align-items-center text-danger`}
            >
              <span className="d-flex align-items-center me-2">
                <Trash size="20" color="#dc3545" />
              </span>
              Delete Chat
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default CDHeader
