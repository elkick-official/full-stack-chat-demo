import { ChangeEvent, FunctionComponent } from 'react'
import inputStyle from './input.module.css'

type InputIcon = {
  isIcon: boolean
  jsxIcon: JSX.Element
}
type InputProps = {
  isVisible?: boolean
  icon?: InputIcon
  type: string
  name: string
  id: string
  placeholder: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}
const CDInput: FunctionComponent<InputProps> = ({
  isVisible = false,
  icon,
  type,
  name,
  id,
  placeholder,
  handleChange,
  value,
}) => {
  return (
    <div className={`${inputStyle.inputGroup} w-100 position-relative`}>
      {isVisible ? (
        <label className={`${inputStyle.inputLabel}`}></label>
      ) : null}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${inputStyle.inputControl} p-2 w-100`}
        onChange={handleChange}
        value={value}
      />
      {icon?.isIcon ? (
        <span className={`${inputStyle?.iconParent} position-absolute`}>
          {icon?.jsxIcon}
        </span>
      ) : null}
    </div>
  )
}

export default CDInput
