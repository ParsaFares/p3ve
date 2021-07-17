// actions
import { dispatchSetInformIsOpen, dispatchSetInformInfo } from './Inform.action'

let onOkay = null

export default (options = {}) =>
  new Promise((resolve) => {
    onOkay = () => {
      resolve()
      dispatchSetInformIsOpen(false)
    }

    dispatchSetInformInfo(options)
    dispatchSetInformIsOpen(true)
  })

export const getOnOkay = () => onOkay
