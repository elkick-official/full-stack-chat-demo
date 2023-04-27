import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { SearchNormal1 } from 'iconsax-react'
import CDInput from '../CDInput/CDInput'
import user1 from '../../assets/images/users/user-1.png'
import user2 from '../../assets/images/users/user-2.png'

import sidebarStyle from './sidebar.module.css'
import CDUserProfile from '../CDUserProfile/CDUserProfile'

const CDSideBar: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [activeTab, setActiveTab] = useState<string>('all')

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchText(value)
  }
  const handleActiveTab = (tabValue: string) => {
    setActiveTab(tabValue)
  }
  return (
    <div className={`${sidebarStyle.messageSidebarWrapper} px-4 w-100 box-shadow`}>
      <div
        className={`${sidebarStyle.chatSearchWrapper} d-flex align-items-center justify-content-center`}
      >
        <CDInput
          icon={{
            isIcon: true,
            jsxIcon: <SearchNormal1 size="18" color="#ffffff" />,
          }}
          type={'text'}
          name={'searchBar'}
          id={'search-bar'}
          placeholder={'Search chat here....'}
          handleChange={handleInputSearch}
          value={searchText}
        />
      </div>
      <div className={`${sidebarStyle.messageCategoryWrapper} mb-2`}>
        <h2 className={`${sidebarStyle.messageHeading} mb-1`}>Messages</h2>
        <div
          className={`${sidebarStyle.messageCategoryList} p-1 d-flex align-items-center`}
        >
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === 'all' && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab('all')}
          >
            All Chats
          </span>
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === 'groups' && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab('groups')}
          >
            Groups
          </span>
          <span
            className={`${sidebarStyle.categoryItem} ${
              activeTab === 'calls' && sidebarStyle.categoryItemActive
            } d-flex align-items-center justify-content-center w-100`}
            onClick={() => handleActiveTab('calls')}
          >
            Calls
          </span>
        </div>
      </div>
      <div className={`${sidebarStyle.userListWrapper} vertical-scroll`}>
        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user1} alt={'user-profile-1'} isActive={true} />

          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
          <div
            className={`${sidebarStyle.messageCount} ms-auto d-flex align-items-center justify-content-center`}
          >
            2
          </div>
        </div>

        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user2} alt={'user-profile-1'} />
          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
        </div>
        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user1} alt={'user-profile-1'} isActive={true} />

          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
          <div
            className={`${sidebarStyle.messageCount} ms-auto d-flex align-items-center justify-content-center`}
          >
            2
          </div>
        </div>

        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user2} alt={'user-profile-1'} />
          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
        </div>
        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user1} alt={'user-profile-1'} isActive={true} />

          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
          <div
            className={`${sidebarStyle.messageCount} ms-auto d-flex align-items-center justify-content-center`}
          >
            2
          </div>
        </div>

        <div
          className={`${sidebarStyle.userChatWrapper} d-flex align-items-center p-2`}
        >
          <CDUserProfile src={user2} alt={'user-profile-1'} />
          <div className={`${sidebarStyle.userProfileRight} ms-2`}>
            <h3 className={`${sidebarStyle.userName} mb-1`}>
              School App Client
            </h3>
            <span className={`${sidebarStyle.lastMessage}`}>
              I have done my work 👍
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CDSideBar
