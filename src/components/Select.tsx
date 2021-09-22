import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

import styles from '../styles/components/SelectInput.module.scss'

type SelectInputType = {
  setDate: React.Dispatch<React.SetStateAction<string>>
}

export default function SelectInput({ setDate }: SelectInputType) {
  const [selectedOption, setSelectedOption] = useState(0)
  const options = [0, 1, 2, 3, 4, 5, 6, 7]

  const showDate = (days: number) => {
    moment.locale('pt')
    return moment().subtract(days, 'days').format('DD MMMM - ddd')
  }

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(Number(e.target.value))
    setDate(showDate(Number(e.target.value)))
  }

  useEffect(() => setDate(showDate(0)), [])

  return (
    <div className={styles.container}>
      <select
        className={styles.customSelect}
        value={selectedOption}
        onChange={(e) => onChange(e)}
      >
        {options.map((day) => (
          <option key={day} value={day}>
            {showDate(day)}
          </option>
        ))}
      </select>

      <span className={styles.icon}>
        <IoIosArrowDroprightCircle size={20} />
      </span>
    </div>
  )
}
