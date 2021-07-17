// modules
import React, { useState } from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// helper components
import TextField from '../Helpers/TextField'
import Button from '../Atomics/Button/Button.presentational'
// helpers
import { cns } from '../../helpers/utils'
// styles
const useStyles = makeStyles({
  settingsContainer: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'white',

    overflowY: 'auto',
    overflowX: 'hidden',

    boxSizing: 'border-box',
    padding: '20px 50px',
  },
  label: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    marginBottom: 5,
    marginTop: 15,
  },
  button: {
    width: '100%',
    height: 35,
    minHeight: 35,

    marginBottom: 10,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  bold: {
    fontWeight: 'bold',
  },
})

const Settings = ({ onChange }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.settingsContainer} scroll-bar`}>
      <TextField
        required
        onChange={onChange('title')}
        value={''}
        label="عنوان آموزه"
        placeholder="عنوان آموزه را وارد کنید"
      />
    </div>
  )
}

// Toolbar.propTypes = {}

// Toolbar.defaultProps = {}

export default Settings
