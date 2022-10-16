export const isEndDateValid = (startDate, endDate) => {
  const startDateToCompare = new Date(startDate).getTime()
  const todayToCompare = new Date().getTime()
  const endDateToCompare = new Date(endDate).getTime()

  return endDateToCompare >= startDateToCompare
}

export const isDateValid = (date) => {
  const dateToCompare = new Date(date).getTime()
  const todayToCompare = new Date().getTime()

  return dateToCompare >= todayToCompare
}