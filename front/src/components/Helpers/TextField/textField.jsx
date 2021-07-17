import React, { Component } from 'react'
// components [atomic]
import Input from './input'
// helpers
import { cns, ab } from '../../../helpers/utils'
// style
import './textField.scss'

class TextField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
    }
    this.changeFocus = this.changeFocus.bind(this)
  }

  shouldComponentUpdate({ showErrors, value }, { isFocus }) {
    return (
      this.state.isFocus !== isFocus ||
      this.props.showErrors !== showErrors ||
      this.props.value !== value
    )
  }

  changeFocus(isFocus) {
    this.setState({ isFocus })
  }

  render() {
    const {
      label,
      required,
      showErrors,
      inputRef,
      textFieldClassName,
      inputClassName,
      style,
      value,
      disabled,
      attachMode,
      ...inputProps // all Input Props
    } = this.props
    const { isFocus } = this.state
    const hasError = !disabled && required && showErrors && !value
    const className = cns(
      'c--text-field-base',
      ab('c--text-field-focused')(isFocus),
      ab('c--text-field-error')(hasError),
      textFieldClassName
    )

    return (
      <div style={{ marginTop: attachMode ? 0 : 15 }} className="c--text-field-container">
        {label && (
          <div
            className={cns(
              'c--text-field-label',
              ab('c--text-field-label-error')(hasError),
              ab('c--text-field-disabled')(disabled)
            )}
          >
            {`${label}${required ? ' *' : ''}`}
          </div>
        )}
        <div className={className} style={style}>
          <Input
            disabled={disabled}
            onFocus={() => this.changeFocus(true)}
            onBlur={() => this.changeFocus(false)}
            className={inputClassName}
            {...inputProps}
            inputRef={inputRef}
            value={value}
            dir="rtl"
          />
        </div>
        {/* {hasError && (
          <div
            className={cns(
              'c--text-field-label',
              'c--text-field-label-error'
            )}
          >
            {`${label} را وارد نکرده اید.`}
          </div>
        )} */}
      </div>
    )
  }
}

export default TextField
