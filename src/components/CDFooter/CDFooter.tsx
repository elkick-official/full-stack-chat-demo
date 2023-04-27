import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Happyemoji, Send2, AttachCircle } from 'iconsax-react'
import CDInput from '../CDInput/CDInput'
import footerStyle from './footer.module.css'
const CDFooter: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('')

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchText(value)
  }
  return (
    <div className={`${footerStyle.footerWrapper} w-100 p-3`}>
      <div className="d-flex align-items-center">
        <span
          className={`${footerStyle.attachFile} d-flex align-items-center p-1 me-1`}
        >
          <AttachCircle size="20" color="#000000" />
        </span>
        <CDInput
          icon={{
            isIcon: true,
            jsxIcon: <Happyemoji size="18" color="#ffffff" />,
          }}
          type={'text'}
          name={'searchBar'}
          id={'search-bar'}
          placeholder={'Search chat here....'}
          handleChange={handleInputSearch}
          value={searchText}
        />
        <span
          className={`${footerStyle.sendMessage} d-flex align-items-center p-1 ms-1`}
        >
          <Send2 size="20" color="#000000" />
        </span>
      </div>
    </div>
  )
}

export default CDFooter
