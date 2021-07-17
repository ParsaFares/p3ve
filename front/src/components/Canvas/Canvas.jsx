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
      width: 1000,
      height: 675,
      backgroundColor: '#ffffff',
    })

    setCanvas(canvas)
    canvas.on('mouse:down', function (options) {
      setSelectedObject(options.target ? options.target : null)
    })

    canvas.on('mouse:wheel', function (opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    })

    canvas.on('mouse:down', function (opt) {
      var evt = opt.e;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    })
    canvas.on('mouse:move', function (opt) {
      if (this.isDragging) {
        var e = opt.e;
        var vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    })
    canvas.on('mouse:up', function (opt) {
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform);
      this.isDragging = false;
      this.selection = true;
    })
  }, [])

  return <canvas id="canvas" className={classes.canvas} />
}

// Canvas.propTypes = {}

// Canvas.defaultProps = {}

export default Canvas
