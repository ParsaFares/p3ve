/*
  * Abbreviated for A & B test for classnames
  * Caution try not to use branch function so much this function lead you to better
    styling architecture 
*/
export const ab = (className) => (test) => (test ? className : false)

export const concatenate = (listOfRuleSets) =>
  listOfRuleSets.join(' ').trimEnd()


/*
 * Abbreviated for ClassNames
 * Used with ab function to evaluate dynamic classnames for styling
 */
export const cns = (...args) => {
  let index = 0
  let classNames = ''
  while (index < args.length) {
    classNames += !args[index] ? '' : `${args[index]} `
    index += 1
  }
  return classNames.trim()
}

/* === Strings === */
export const toPersian = (text) => {
  if (text == null) return text
  if (typeof text === 'number') return text.toLocaleString('fa-IR')
  if (typeof text === 'string')
    return text.replace(/[0-9]/g, (num) =>
      parseInt(num).toLocaleString('fa-IR')
    )
}

// is rlt if arabic pattern contains all character
const ARABIC_PATTERN = /[\u0600-\u06FF]/
export const getDirection = (text) =>
  ARABIC_PATTERN.test(text) ? 'rtl' : 'ltr'
