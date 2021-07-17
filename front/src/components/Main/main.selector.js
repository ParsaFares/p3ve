// modules
import * as R from 'ramda'
import { createSelector } from 'reselect'

export const calculateAgeSelector = createSelector([R.prop('main')], (data) => {
  const {
    minAge,
    indAge,

    phoneCost,
    risedPhoneCost,
    phoneRepairYearlyCost,

    pressureOnParents,
    parentsAwareness,
    socialMediaHarmness,
  } = data

  const findAge = (currentAge) => {
    if (currentAge < minAge) return minAge
    if (currentAge > indAge) return indAge

    const costOfNotBuying = risedPhoneCost - phoneCost + pressureOnParents
    const costOfBuying =
      (1 - parentsAwareness) * socialMediaHarmness +
      (indAge - currentAge) * phoneRepairYearlyCost

    return costOfNotBuying > costOfBuying ? currentAge : findAge(currentAge + 1)
  }

  return findAge(minAge)
})
