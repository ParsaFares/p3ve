import React from 'react'
// styles
import { makeStyles } from '@material-ui/core/styles'
// components
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 10,
  },
  sliderLabel: {
    fontSize: 14,
  },
})

export default function DiscreteSlider({
  label,
  value,
  steps = 0.5,
  minValue = 0,
  maxValue = 10,
  onChange,
}) {
  const classes = useStyles()

  const marks = [
    { value: minValue, label: 'خیلی کم' },
    { value: maxValue, label: 'خیلی زیاد' },
  ]

  return (
    <div className={classes.root}>
      <Typography
        id="discrete-slider"
        className={classes.sliderLabel}
        gutterBottom
      >
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => {
          if (newValue !== value) onChange(newValue)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={steps}
        marks={marks}
        min={minValue}
        max={maxValue}
      />
    </div>
  )
}
