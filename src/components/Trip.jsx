import React from 'react'
import { useSelector } from 'react-redux'

export const Trip =  () => {

  const search = useSelector((state) => state.search)
  const {startDate, endDate} = search

  return (
  	<div className="app-wrapper">
	    <div className="bg-dark container">
	    	<div className="search-container">
		      <h2> Your trip: </h2>
		      <p>Departure: {startDate}</p>
		      <p>Arrival: {endDate}</p>
		    </div>
	    </div>
   	</div>
  )
}