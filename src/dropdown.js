<Form onSubmit={searchForTrains}>
  <Form.Group className="mb-3" controlId="startDateForm">
    <DatePicker
      placeholderText="yyyy-mm-dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className="form-control"
      minDate={today}
      dateFormat="yyyy-MM-dd"
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="endDateForm">
    <DatePicker
      placeholderText="yyyy-mm-dd"
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      className="form-control"
      minDate={startDate}
      disabled={disabled} 
      dateFormat="yyyy-MM-dd"
    />
  </Form.Group>
</Form>