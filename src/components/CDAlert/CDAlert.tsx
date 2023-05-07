import React, { FunctionComponent } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

export const CDAlert: FunctionComponent = () => {
  const onConfirm = () => {}
  const onCancel = () => {}
  return (
    <div>
      <SweetAlert
        title="Here's a message!"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </div>
  )
}
