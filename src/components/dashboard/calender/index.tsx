'use client'
import { Alert, Calendar } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import React, { useState } from 'react'

const Calender: React.FC = () => {
  const [value, setValue] = useState(() => dayjs('2017-01-25'))
  const [selectedValue, setSelectedValue] = useState(() => dayjs('2017-01-25'))

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue)
    setSelectedValue(newValue)
  }

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue)
  }

  return (
    <>
      <Alert message={`You selected date: ${selectedValue?.format('YYYY-MM-DD')}`} />
      <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
    </>
  )
}

export default Calender
