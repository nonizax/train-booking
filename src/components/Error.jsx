import React from 'react'

export const Error =  ({showErrorInvalidStartDate, showErrorInvalidEndDate, showErrorEndDateEarlierThanStart}) => {
  return (
	  <div>
	    {showErrorInvalidStartDate && <p className="error">Invalid departure date</p> }
	    {showErrorInvalidEndDate && <p className="error">Invalid return date</p> }
	    {showErrorEndDateEarlierThanStart && <p className="error">The arrival date shoule be later than the departure</p> }
	  </div>
  )
}