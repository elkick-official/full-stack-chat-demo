import { ChangeEvent, FunctionComponent } from 'react'
import inputStyle from './input.module.css'
import { clsx } from 'clsx'
interface IInputIcon {
  isIcon: boolean
  jsxIcon: JSX.Element
}
interface IInputProps {
  isVisible?: boolean
  inputLabel?: string
  inputLabelClass?: string
  icon?: IInputIcon
  type: string
  name: string
  id: string
  placeholder: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  inputCustomClass?: string
  inputParentClass?: string
  multiple?: boolean
}
const CDInput: FunctionComponent<IInputProps> = (props) => {
  const {
    isVisible = false,
    icon,
    type,
    name,
    id,
    placeholder,
    handleChange,
    value,
    inputCustomClass,
    inputParentClass,
    multiple = false,
    inputLabel,
    inputLabelClass,
  } = props
  return (
    <div
      className={clsx([
        inputStyle.inputGroup,
        inputParentClass,
        'w-100 position-relative',
      ])}
    >
      {isVisible ? (
        <label className={`${inputLabelClass} `}>{inputLabel}</label>
      ) : null}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${inputStyle.inputControl} ${inputCustomClass}  w-100`}
        onChange={handleChange}
        value={value}
        multiple={multiple}
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
