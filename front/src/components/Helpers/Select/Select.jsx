import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles, darken } from '@material-ui/core/styles'
// helper
import { MenuItem } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    inputContainer: {
        borderRadius: 11,
        height: 35,
        display: 'flex',
    },
    root: {
        margin: '10px 0px 10px 0px',
        width: '100%'
    },
    input: {
        fontSize: 16,
        lineHeight: '21px',
        letterSpacing: -0.08,
        padding: '7px 9px',

        '&::placeholder': {
            color: '#rgb(129 129 129)',
            opacity: 0.6,
            fontSize: 11,
            direction: 'rtl',
            textAlign: 'right',
        },
    },
    label: {
        marginBottom: 5,
        lineHeight: '21px',
        direction: 'rtl',
        fontSize: 12
    },
    iconContainer: {
        backgroundColor: '#F14E4E',
        width: 45,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '11px 0 0 11px',
        minWidth: 'unset',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: darken('#F14E4E', 0.2),
            boxShadow: 'none',
        },
    },
    inputComponent: {
        borderRadius: '0 11px 11px 0',
        border: '1.5px solid #818181',
        boxSizing: 'border-box',
        borderLeft: 'none',

    },
}))

const Select = ({ }) => {
    const classes = useStyles()
    return (
        <div>
            {/* <FormControl className={classes.margin}> */}
            {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={'عکس'}
                onChange={console.log}
            // input={<BootstrapInput />}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {/* </FormControl> */}
        </div>
    )
}

Select.propTypes = {
    choices: PropTypes.array
}
Select.defaultProps = {
    choices: []
}

export default Select
