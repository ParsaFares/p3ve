import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// helper
import { toPersian, cns, ab } from '../../../helpers/utils'

// style
const useStyles = makeStyles(theme => ({
  groupButtonComponent: {
    width: '100%',
    marginTop: 15,
  },
  groupButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 35,
    borderRadius: 11,
    overflow: 'hidden',
  },
  font: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  label: {
    marginBottom: 3,
  },
  button: {
    backgroundColor: '#f0f0f0',
    color: '#818181',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: '-0.08px',
    height: '100%',
    borderRadius: 0,
    fontWeight: 500,
    // flexGrow: 2,
    width: '100%',
    marginRight: 2,
    transition: theme.transitions.create(['background-color']),
    '&:first-child': { marginRight: 0 },
    '&:hover': {
      backgroundColor: '#818181',
      color: '#fff',
    },
  },
  buttonSelected: {
    backgroundColor: '#818181',
    color: '#fff',
  },
}))

const GroupButton = ({ items, onChange, label, value, disabled }) => {
  const classes = useStyles()

  return (
    <div className={classes.groupButtonComponent}>
      <Typography className={cns(classes.label, classes.font)}>
        {label}
      </Typography>
      <div className={classes.groupButton} dir="rtl">
        {items.map(item => (
          <Button
            key={item.id}
            variant="text"
            className={cns(
              classes.button,
              ab(classes.buttonSelected)(value === item.id),
            )}
            onClick={() => onChange(item.id)}
            disabled={disabled}
            style={
              disabled ? { color: value === item.id ? '#FFF' : '#818181' } : {}
            }
          >
            {toPersian(item.label)}
          </Button>
        ))}
      </div>
    </div>
  )
}

GroupButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func.isRequired,
}
GroupButton.defaultProps = {
  items: [
    { label: 'گزینه 1', id: '0' },
    { label: 'گزینه 2', id: '1' },
    { label: 'گزینه 3', id: '2' },
    { label: 'گزینه 4', id: '3' },
  ],
}

export default GroupButton
