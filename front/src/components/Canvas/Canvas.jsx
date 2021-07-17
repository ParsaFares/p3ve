// modules
import React, { useEffect, useState } from 'react'
import { fabric } from 'fabric'
import { makeStyles } from '@material-ui/core/styles'
// helpers
import { cns } from '../../helpers/utils'

const useStyles = makeStyles({
  canvas: {},
})

const Canvas = ({ setCanvas, setSelectedObject }) => {
  const classes = useStyles()

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: 500,
      height: 500,
      backgroundColor: '#ffffff',
    })

    setCanvas(canvas)
    canvas.on('mouse:down', function (options) {
      if (options.target) {
        setSelectedObject(options.target)
      }
    })
  }, [])

  return <canvas id="canvas" className={classes.canvas} />
}

// Canvas.propTypes = {}

// Canvas.defaultProps = {}

export default Canvas
