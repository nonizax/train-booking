import React, { useState, useEffect, useRef } from 'react'
import { withRouter, useNavigate , useSearchParams} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { isDateValid, isEndDateValid } from '../utils/validator'
import { Error } from './Error'

export const Search =  () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const today = new Date()

  /* params from the url */
  const [searchParams] = useSearchParams();
  const departureParam = searchParams.get('departure')
  /* *********************** */


 /* enable return */
  const [tripType, setTripType] = useState("One-way")
  const [startDate, setStartDate] = useState(departureParam || false)
  const [endDate, setEndDate] = useState()
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
     tripType !=='One-way' ? setDisabled(false) : setDisabled(true)
  }, [tripType])


  const changeTripType = (e) => {
    setTripType(e)
  }

  /* validate form */
  const [isValidForm, setIsValidForm] = useState(false)
  const [showErrorInvalidStartDate, setShowErrorInvalidStartDate] = useState(false)
  const [showErrorInvalidEndDate, setShowErrorInvalidEndDate] = useState(false)
  const [showErrorEndDateEarlierThanStart, setShowErrorEndDateEarlierThanStart] = useState(false)

  useEffect(() => {
    setIsValidForm(true)
    if (startDate) {
      const validStartDate = isDateValid(startDate)
      setIsValidForm(validStartDate)
      setShowErrorInvalidStartDate(!validStartDate)
    } 

    if (endDate) {
      const validEndDate = isDateValid(endDate)
      setIsValidForm(validEndDate)
      setShowErrorInvalidEndDate(!validEndDate)
    } 

    if(startDate && endDate && isValidForm) {
      const endDateEarlierThanStart = isEndDateValid(startDate, endDate)
      setIsValidForm(endDateEarlierThanStart)
      setShowErrorEndDateEarlierThanStart(!endDateEarlierThanStart)
    }
  },[startDate, endDate, isValidForm])
  /* ***************** */

  /* Book the trip */
  const searchForTrains = () => {
    if (!startDate) {
      setShowErrorInvalidStartDate(true)
      setIsValidForm(false)
      return
    }
    
    if(tripType !=='One-way' && !endDate){
      setShowErrorInvalidEndDate(true)
      setIsValidForm(false)
      return
    }


    if (!isValidForm) return
    
    dispatch({search: {startDate, endDate}, type: 'SEARCH' })
    navigate('trip')
  }


  return (
    <div className="app-wrapper">
      <div className="bg-dark container">
        <h2> Book a train</h2>
        <div className="search-container">
          <DropdownButton variant="secondary" id="dropdown-basic-button" title={tripType} onSelect={changeTripType}>
            <Dropdown.Item eventKey="One-way">One-way</Dropdown.Item>
            <Dropdown.Item eventKey="Return">Return</Dropdown.Item>
          </DropdownButton>

          <input type="date" className={`date-input ${showErrorInvalidStartDate ? "error-input" : ""}`} name="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

          <input type="date" className={`date-input ${showErrorInvalidEndDate || showErrorEndDateEarlierThanStart ? "error-input" : ""}`} name="endDate" disabled={disabled} value={endDate} onChange={(e) => setEndDate(e.target.value)}/>


          <div className="btn-container-div">
            <Button className="btn-book-button" variant="secondary" onClick={searchForTrains}>Book</Button>{' '}
          </div>

          <Error 
            showErrorInvalidStartDate={showErrorInvalidStartDate}
            showErrorInvalidEndDate={showErrorInvalidEndDate}
            showErrorEndDateEarlierThanStart={showErrorEndDateEarlierThanStart} 
          />
        </div>
      </div>
    </div>
  )
}
