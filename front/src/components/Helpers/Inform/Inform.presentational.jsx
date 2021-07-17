import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import { Dialog } from '@material-ui/core'
import Button from '../../Atomics/Button/Button.presentational'

const errorIconColor = {
  info: '#4FC4F4',
  warn: '#F2CB00',
  error: '#E6494F',
}

const sizes = {
  large: 550,
  medium: 250,
  small: 215,
}

// style
const useStyles = makeStyles(() => ({
  confirmation: {
    maxWidth: 'none',
    height: ({ size }) => sizes[size],
    borderRadius: 30,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'inherit',

    boxSizing: 'border-box',
    padding: 14,
    margin: 25,

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  backdrop: {
    backgroundColor: '#000000b3',
  },
  content: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    boxSizing: 'border-box',

    color: 'black',
    fontSize: 16,
    padding: ({ size }) => (size === 'small' ? 0 : '0 15px'),
  },
  message: {
    textAlign: ({ size }) => (size === 'small' ? 'center' : 'justify'),
    textJustify: 'inter-word',

    hyphens: 'auto',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-line',
  },
  buttons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    width: '100%',
    height: 35,
    borderRadius: 11,

    padding: 0,
    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  buttonCaption: {
    color: 'white',
    fontSize: 12,
  },
  errorIcon: {
    width: 60,
    height: 60,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: ({ type }) => errorIconColor[type] || '#E6494F',
    color: 'white',
    borderRadius: '50%',

    fontSize: 40,
    boxSizing: 'border-box',
    padding: '7px 0 0 1px',
    marginBottom: 20,
  },
}))

const Inform = ({ isOpen, type, size, message, buttonCaption, onOkay }) => {
  const classes = useStyles({ type, size })

  return (
    <Dialog
      disableEnforceFocus
      open={isOpen}
      PaperProps={{
        className: classes.confirmation,
      }}
      BackdropProps={{
        className: classes.backdrop,
      }}
      onClose={type === 'info' ? onOkay : null}
    >
      <span className={classes.content}>
        <span className={classes.errorIcon}>!</span>
        <span className={classes.message}>{message}</span>
      </span>
      <span className={classes.buttons}>
        <Button
          classesProp={{
            button: classes.button,
            typography: classes.buttonCaption,
          }}
          variant="normal"
          onClick={onOkay}
          color={type === 'info' ? '#4FC4F4' : '#E6494F'}
          text={buttonCaption}
        />
      </span>
    </Dialog>
  )
}

export default Inform
