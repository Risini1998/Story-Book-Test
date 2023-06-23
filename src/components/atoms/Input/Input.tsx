import React, {
  useState,
  type ReactElement,
  forwardRef,
  type InputHTMLAttributes
} from 'react'
import classnames from 'classnames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // state?: 'default' | 'hover' | 'focused' | 'disabled'
  disabled?: boolean
  hint?: string
  inputSize?: 'sm' | 'md'
  isError?: boolean
  isHintEnabled?: boolean
  isLabelEnabled?: boolean
  isLeadingIconEnabled?: boolean
  isTrailingIconEnabled?: boolean
  label?: string
  leadingIcon?: string
  required?: boolean
  telInput?: boolean
  trailingIcon?: string
}

export const Input = forwardRef(function Input(
  {
    // state = 'default',
    disabled = false,
    hint = '',
    inputSize = 'md',
    isError = false,
    isHintEnabled = false,
    isLabelEnabled = false,
    isLeadingIconEnabled = false,
    isTrailingIconEnabled = false,
    label = '',
    leadingIcon = '',
    required = false,
    telInput = false,
    trailingIcon = '',
    ...inputProps
  }: Props,
  ref: any
): ReactElement {
  const [showPassword, setShowPassword] = useState(false)
  const { type, ...otherProps } = inputProps

  const wrapperClassName: string = 'flex flex-col gap-1'

  const labelClassName: string = classnames(
    'text-N-700 font-medium font-heading',
    {
      'after:content-["*"] after:ml-[2px] after:text-R-500': required
    },
    {
      'text-sm': inputSize === 'sm',
      'text-base': inputSize === 'md'
    }
  )

  const inputWrapperClassName: string = 'relative w-fit'

  const leadingIconClassName: string = classnames(
    'h-4 w-4 left-4 fill-N-700 absolute flex justify-center items-center',
    {
      'top-3 bottom-3': inputSize === 'sm',
      'top-[14px] bottom-[14px]': inputSize === 'md'
    },
    leadingIcon
  )

  const showingTrailingIcon =
    type === 'password'
      ? showPassword
        ? 'ri-eye-line'
        : 'ri-eye-close-line'
      : trailingIcon

  const trailingIconClassName: string = classnames(
    'h-4 w-4 right-4 fill-N-700 absolute flex justify-center items-center cursor-pointer',
    {
      'top-3 bottom-3': inputSize === 'sm',
      'top-[14px] bottom-[14px]': inputSize === 'md'
    },
    showingTrailingIcon
  )

  const inputClassName: string = classnames(
    'w-80 rounded border-2 font-regular font-heading focus:outline-none',
    {
      'pl-[42px]': isLeadingIconEnabled,
      'pl-3': !isLeadingIconEnabled
    },
    {
      'pr-[42px]': isTrailingIconEnabled,
      'pr-3': !isTrailingIconEnabled
    },
    {
      'text-sm h-10': inputSize === 'sm',
      'text-base h-11': inputSize === 'md'
    },
    {
      'bg-N-100 border-N-200 text-N-200 cursor-not-allowed':
        disabled && !isError,
      'bg-N-100 border-R-500 text-N-200 cursor-not-allowed':
        disabled && isError,
      'text-N-700 border-N-100 hover:bg-N-25 focus:bg-white focus:border-B-200':
        !disabled && !isError,
      'text-N-700 border-R-500 hover:bg-N-25 focus:bg-white focus:border-R-500':
        !disabled && isError
    },
    {
      '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none':
        telInput
    }
  )

  const hintClassName: string = classnames(
    'text-xs font-regular font-heading',
    {
      'text-R-500': isError,
      'text-N-500': !isError
    }
  )

  const switchVisibility = (): void => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={wrapperClassName}>
      {isLabelEnabled && <label className={labelClassName}>{label}</label>}
      <div className={inputWrapperClassName}>
        {isLeadingIconEnabled && <i className={leadingIconClassName}></i>}
        <input
          className={inputClassName}
          disabled={disabled}
          type={showPassword ? 'text' : type}
          ref={ref}
          {...otherProps}
        />
        {(isTrailingIconEnabled || type === 'password') && (
          <i className={trailingIconClassName} onClick={switchVisibility}></i>
        )}
      </div>
      {isHintEnabled && <p className={hintClassName}>{hint}</p>}
    </div>
  )
})

export default Input
