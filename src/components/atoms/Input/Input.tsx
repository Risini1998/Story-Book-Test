import React, {
  type ReactNode,
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
  isLeadingIcon?: boolean
  isTrailingIcon?: boolean
  label?: string
  leadingIcon?: ReactNode
  required?: boolean
  telInput?: boolean
  trailingIcon?: ReactNode
}

// TODO: inputProps, error prop added? icon?
// TODO: Added disabled property (because get the error Property 'disabled' does not exist on type '{ inputProps: InputHTMLAttributes<HTMLInputElement>; }'.)

export const Input = forwardRef(function Input(
  {
    // state = 'default',
    disabled = false,
    hint = '',
    inputSize = 'md',
    isError = false,
    isHintEnabled = false,
    isLabelEnabled = false,
    isLeadingIcon = false,
    isTrailingIcon = false,
    label = '',
    leadingIcon = null,
    required = false,
    telInput = false,
    trailingIcon = null,
    ...inputProps
  }: Props,
  ref: any
): ReactElement {
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

  const inputClassName: string = classnames(
    'w-80 px-3 rounded border-2 font-regular font-heading focus:outline-none',
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

  return (
    <div className={wrapperClassName}>
      {isLabelEnabled && <label className={labelClassName}>{label}</label>}
      <input
        className={inputClassName}
        disabled={disabled}
        type={telInput ? 'number' : 'text'}
        ref={ref}
        {...inputProps}
      />
      {isHintEnabled && <p className={hintClassName}>{hint}</p>}
    </div>
  )
})

export default Input
