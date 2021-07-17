// modules
import React, { useCallback } from 'react'
import { fabric } from 'fabric'
import { makeStyles } from '@material-ui/core/styles'
import codegen from '../../codegen.js'
// helper components
import { IconButton } from '@material-ui/core'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined'
import OpenInBrowserOutlinedIcon from '@material-ui/icons/OpenInBrowserOutlined'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined'
import Button from '../Atomics/Button/Button.presentational'
// helpers
import { cns } from '../../helpers/utils'
// styles
const useStyles = makeStyles({
  toolbarContainer: {
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
  tools: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconButton: {
    width: 50,
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
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

const Toolbar = ({ canvas }) => {
  const classes = useStyles()

  const addImage = useCallback(
    e => {
      const reader = new FileReader()
      reader.onload = function (event) {
        const imgObj = new Image()

        imgObj.src = event.target.result
        imgObj.onload = function () {
          // start fabricJS stuff
          const image = new fabric.Image(imgObj)
          image.set({
            left: 20,
            top: 20,
          })

          //image.scale(getRandomNum(0.1, 0.25)).setCoords();
          canvas.add(image)
          // end fabricJS stuff
        }
      }
      if (e.target && e.target.files) {
        reader.readAsDataURL(e.target.files[0])
      }
    },
    [canvas],
  )

  return (
    <div className={`${classes.toolbarContainer} scroll-bar`}>
      <div className={classes.tools}>
        <label htmlFor="image-loader">
          <IconButton
            className={classes.iconButton}
            aria-label="toggle-expansion"
            component="span"
          >
            <ImageOutlinedIcon className={classes.icon} />
          </IconButton>
        </label>

        <input
          type="file"
          id="image-loader"
          onChange={addImage}
          style={{ display: 'none' }}
        />
      </div>

      <div className={classes.controls}>
        <IconButton
          aria-label="toggle-expansion"
          component="span"
          className={classes.iconButton}
          onClick={e => {
            e.stopPropagation()
            codegen(canvas.toDatalessJSON().objects)
          }}
        >
          <SaveOutlinedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          aria-label="toggle-expansion"
          component="span"
          className={classes.iconButton}
          onClick={e => {
            e.stopPropagation()
            // onLoad()
          }}
        >
          <OpenInBrowserOutlinedIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  )
}

// Toolbar.propTypes = {}

// Toolbar.defaultProps = {}

export default Toolbar
