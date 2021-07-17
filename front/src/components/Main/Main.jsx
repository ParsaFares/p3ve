// modules
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import Settings from '../Settings/settings.container'
import Toolbar from '../Toolbar/toolbar.container'
import Canvas from '../Canvas/canvas.container'

// styles
const useStyles = makeStyles({
  mainContainer: {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',

    backgroundColor: '#FAFAFC',
    overflow: 'hidden',
  },
  settingsContainer: {
    width: 200,
    flexShrink: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',

    backgroundColor: 'white',
    boxSizing: 'border-box',
  },
  canvasContainer: {
    height: '100%',
    flexGrow: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#959595',
  },
  toolbarContainer: {
    width: 70,
    flexShrink: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',

    backgroundColor: 'white',
    boxSizing: 'border-box',
  },
})

const Main = () => {
  const classes = useStyles()
  const [canvas, setCanvas] = useState(null)
  const [selectedObject, setSelectedObject] = useState(null)

  return (
    <div className={classes.mainContainer}>
      <div className={classes.settingsContainer}>
        <Settings
          canvas={canvas}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
        />
      </div>
      <div className={classes.canvasContainer}>
        <Canvas setCanvas={setCanvas} setSelectedObject={setSelectedObject} />
      </div>
      <div className={classes.toolbarContainer}>
        <Toolbar canvas={canvas} />
      </div>
    </div>
  )
}

export default Main
