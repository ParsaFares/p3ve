import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 50,
  },
  sliderLabel: {
    marginBottom: 50,
  },
})

export default function DiscreteSlider({
  label,
  firstValue = 5,
  secondValue = 25,
  steps = 1,
  minValue = 5,
  maxValue = 25,
  onChangeFirstValue,
  onChangeSecondValue,
}) {
  const classes = useStyles()

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
        value={[firstValue, secondValue]}
        onChange={(_, [newFirstValue, newSecondValue]) => {
          if (newFirstValue !== firstValue) onChangeFirstValue(newFirstValue)
          if (newSecondValue !== secondValue)
            onChangeSecondValue(newSecondValue)
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={steps}
        marks
        min={minValue}
        max={maxValue}
      />
    </div>
  )
}
