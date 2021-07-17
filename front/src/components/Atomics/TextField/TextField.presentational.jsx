// modules
import React from 'react'
import PropTypes from 'prop-types'
import { fade, withStyles, makeStyles } from '@material-ui/core/styles'
import { FormControl, InputLabel, InputBase } from '@material-ui/core'
// styles
import './TextField.scss'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: ({ hasLabel }) => (hasLabel ? 20 : 0),
    '&:first-child': {
      marginTop: 0,
    },
  },
}))

const TextField = ({
  placeholder,
  label,
  onChange,
  required,
  value,
  showErrors,
}) => {
  const classes = useStyles({ hasLabel: !!label })
  const id = `bootstrap-input-${Math.random().toString(36).substr(-5)}`
  const hasError = required && showErrors && !value

  return (
    <FormControl
      fullWidth
      error={hasError}
      required={required}
      className={classes.root}
    >
      {label && (
        <BootstrapInputLabel shrink htmlFor={id}>
          {label}
        </BootstrapInputLabel>
      )}
      <BootstrapInput
        placeholder={placeholder}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </FormControl>
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
}

TextField.defaultProps = {
  placeholder: '',
  hasError: false,
  required: false,
  label: '',
  value: '',
}

export default TextField

// helper/components
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: 20,
    },
  },
  input: {
    borderRadius: 11,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #818181',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    direction: 'rtl',
    '&:focus': {
      boxShadow: `${fade('rgb(128, 130, 133)', 0.5)} 0 0 0 0.1rem`,
      borderColor: 'rgb(128, 130, 133)',
    },
    '&::placeholder': {
      direction: 'rtl',
    },
  },
}))(InputBase)

const BootstrapInputLabel = withStyles((theme) => ({
  formControl: {
    left: 'unset',
    right: 0,
    transition: 'none',
    transform: 'unset',
    color: '#000',
    fontSize: 12,
  },
  shrink: {
    transformOrigin: 'top right',
  },
}))(InputLabel)
