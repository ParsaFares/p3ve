// modules
import React, { useState, useCallback, useEffect, useReducer } from 'react'
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',

    overflowY: 'auto',
    overflowX: 'hidden',

    boxSizing: 'border-box',
    padding: 20,
  },
  noContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noContentText: {
    fontSize: 16,
    color: '#818181',
  },
  settings: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    minWidth: 30,
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

    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
})

const initialState = {
  name: 'object',
  left: 0,
  top: 0,
  z: 0,
  angle: 0,
  width: 0,
  height: 0,
  scaleX: 1,
  scaleY: 1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.payload.key]: action.payload.value }
    case 'merge':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const Settings = ({ canvas, selectedObject, setSelectedObject }) => {
  const classes = useStyles()
  const [settings, dispatch] = useReducer(reducer, initialState)

  const removeObject = useCallback(() => {
    if (canvas && selectedObject) {
      canvas.remove(selectedObject)
      setSelectedObject(null)
    }
  }, [canvas, selectedObject])

  const setProperty = useCallback(
    key => value => {
      if (!selectedObject) return

      selectedObject.set(key, Number(value)).setCoords()
      canvas.requestRenderAll()
      dispatch({ type: 'update', payload: { key, value } })
    },
    [canvas, selectedObject],
  )

  const setStringProperty = useCallback(
    key => value => {
      if (!selectedObject) return

      selectedObject.set(key, value).setCoords()
      dispatch({ type: 'update', payload: { key, value } })
    },
    [canvas, selectedObject],
  )

  useEffect(() => {
    const updateSettingValues = () => {
      if (!selectedObject) return

      dispatch({
        type: 'merge',
        payload: {
          name: selectedObject.name,
          left: selectedObject.left,
          top: selectedObject.top,
          z: selectedObject.z,
          angle: selectedObject.angle,
          width: selectedObject.width,
          height: selectedObject.height,
          scaleX: selectedObject.scaleX,
          scaleY: selectedObject.scaleY,
        },
      })
    }

    if (selectedObject) console.log(selectedObject.toObject())
    updateSettingValues()

    if (canvas)
      canvas.on({
        'object:moving': updateSettingValues,
        'object:scaling': updateSettingValues,
        'object:resizing': updateSettingValues,
        'object:rotating': updateSettingValues,
        'object:skewing': updateSettingValues,
      })
  }, [canvas, selectedObject])

  return !!selectedObject ? (
    <div className={`${classes.settingsContainer} scroll-bar`}>
      <div className={classes.settings}>
        <TextField
          onChange={setStringProperty('name')}
          value={settings.name}
          label="Name"
          placeholder="object name"
        />
        <TextField
          onChange={setProperty('left')}
          value={settings.left}
          label="X"
          placeholder="position X"
        />
        <TextField
          onChange={setProperty('top')}
          value={settings.top}
          label="Y"
          placeholder="position Y"
        />
        <TextField
          onChange={setProperty('z')}
          value={settings.z}
          label="Z"
          placeholder="object depth"
        />
        <TextField
          onChange={setProperty('angle')}
          value={settings.angle}
          label="Angle"
          placeholder="in degree"
        />
        <TextField
          onChange={setProperty('width')}
          value={settings.width}
          label="Width"
          placeholder="object width"
        />
        <TextField
          onChange={setProperty('height')}
          value={settings.height}
          label="Height"
          placeholder="object height"
        />
        <TextField
          onChange={setProperty('scaleX')}
          value={settings.scaleX}
          label="Scale X"
          placeholder="scale X"
        />
        <TextField
          onChange={setProperty('scaleY')}
          value={settings.scaleY}
          label="Scale Y"
          placeholder="scale Y"
        />
      </div>

      <Button
        variant="normal"
        text="Remove Object"
        color="#E00300"
        classesProp={{ button: classes.button }}
        onClick={removeObject}
      />
    </div>
  ) : (
    <div className={classes.noContent}>
      <span className={classes.noContentText}>Select an Object</span>
    </div>
  )
}

// Toolbar.propTypes = {}

// Toolbar.defaultProps = {}

export default Settings
