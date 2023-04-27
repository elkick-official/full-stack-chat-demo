import React, { FunctionComponent } from 'react'
import CDUserProfile from '../CDUserProfile/CDUserProfile'
import user1 from '../../assets/images/users/user-1.png'
import contentStyle from './content.module.css'
const CDContent: FunctionComponent = () => {
  return (
    <div
      className={`${contentStyle.messageContentWrapper} p-2 vertical-scroll`}
    >
      <div className={`${contentStyle.messageLeft} d-flex p-1 `}>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
      </div>
      <div className={`${contentStyle.messageRight} d-flex p-1 `}>
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
      </div>
      <div className={`${contentStyle.messageLeft} d-flex p-1 `}>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
      </div>
      <div className={`${contentStyle.messageRight} d-flex p-1 `}>
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
      </div>
      <div className={`${contentStyle.messageLeft} d-flex p-1 `}>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
      </div>
      <div className={`${contentStyle.messageRight} d-flex p-1 `}>
        <div className={`${contentStyle.messageWrapper} p-2box-shadow `}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
      </div>
      <div className={`${contentStyle.messageLeft} d-flex p-1 `}>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
      </div>
      <div className={`${contentStyle.messageRight} d-flex p-1 `}>
        <div className={`${contentStyle.messageWrapper} p-2 box-shadow`}>
          <div
            className={`${contentStyle.messageInfo} d-flex align-items-center justify-content-between mb-1`}
          >
            <div className={`${contentStyle.messageInfoName}`}>
              Nikunj Ravaliya
            </div>
            <div className={`${contentStyle.messageInfoTime}`}>12:45</div>
          </div>
          <div>Hi, welcome to SimpleChat! Go ahead and send me a message.</div>
        </div>
        <CDUserProfile src={user1} alt={'user-profile-2'} />
      </div>
    </div>
  )
}

export default CDContent
