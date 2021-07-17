// modules
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import CloseIcon from '@material-ui/icons/Close'
import Button from '../Button/Button.presentational'

const useStyles = makeStyles({
  buttonIcon: { width: 25, height: 25, color: 'white' },
  button: {
    width: 35,
    height: 35,
    minWidth: 35,
    padding: 0,
    borderRadius: 11,

    display: 'flex',
    flexDirection: 'center',
    alignItems: 'center',

    marginRight: 10,
  },
})

export default ({ onClick, disabled }) => {
  const classes = useStyles()
  return (
    <Button
      classesProp={{
        button: classes.button,
        icon: classes.buttonIcon,
      }}
      IconComponent={CloseIcon}
      variant="normal"
      onClick={onClick}
      color="#E6494F"
      disabled={disabled}
    />
  )
}
