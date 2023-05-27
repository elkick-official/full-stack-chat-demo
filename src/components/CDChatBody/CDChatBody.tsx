import React, { FunctionComponent } from 'react'
import CDHeader from '../CDHeader/CDHeader'
import CDFooter from '../CDFooter/CDFooter'
import CDContent from '../CDContent/CDContent'

const CDChatBody: FunctionComponent = () => {
  return (
    <div className="w-100 position-relative box-shadow">
      <CDHeader />
      <CDContent />
      <CDFooter />
    </div>
  )
}

export default CDChatBody
