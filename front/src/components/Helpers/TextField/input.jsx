/* eslint-disable react/prop-types */
import React from 'react'
// helpers
import { concatenate, ab } from '../../../helpers/utils'

// TODO: need to be replaced with new smaller input element

const Input = ({
  autoComplete,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyPress,
  placeholder,
  type,
  value,
  className,
  inputRef,
  disabled,
  centered,
  ...other
}) => {
  const inputClassName = concatenate([
    'c--input-base',
    ab('c--input-base-disabled')(disabled),
    className,
  ])

  return (
    <input
      ref={inputRef}
      className={inputClassName}
      autoComplete={autoComplete}
      id={id}
      name={name}
      onBlur={onBlur}
      onChange={e => onChange(e.target.value)}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
      {...other}
    />
  )
}

export default Input
