import React, { FormEvent, useState } from 'react'
import api from '../service/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/pages/Home.module.scss'

import { calculateTime, calculateHrsAndMin } from '../utils/calculateTime'
import { ControlContext } from '../contexts/ControlContext'
import Schedules from '../components/Schedules'
import Information from '../components/Information'
import Activities from '../components/Activities'
import SelectInput from '../components/Select'

export default function MyApp() {
  // Entry and Exit
  const [currentDate, setCurrentDate] = useState('')
  const [morningEntry, setMorningEntry] = useState('')
  const [morningExit, setMorningExit] = useState('')
  const [afternoonEntry, setAfternoonEntry] = useState('')
  const [afternoonExit, setAfternoonExit] = useState('')

  // Activities
  const [morningActivities, setMorningActivities] = useState('')
  const [afternoonActivities, setAfternoonActivities] = useState('')

  // Calculate times
  const lunch = calculateTime(morningExit, afternoonEntry)
  const morning = calculateTime(morningEntry, morningExit)
  const afternoon = calculateTime(afternoonEntry, afternoonExit)
  const totalTime = calculateHrsAndMin(morning + afternoon)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    add()
    notification('Ponto adicionado')
  }

  const notification = (text: string) => {
    toast.success(text, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }

  const add = () => {
    api.post('/add', {
      currentDate,
      morningEntry,
      morningExit,
      afternoonEntry,
      afternoonExit,
      morningActivities,
      afternoonActivities
    })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <SelectInput setDate={setCurrentDate} />

      <div className={styles.formGrid}>
        <ControlContext.Provider
          value={{
            setMorningEntry,
            setMorningExit,
            setAfternoonEntry,
            setAfternoonExit,
            setMorningActivities,
            setAfternoonActivities,
            lunch,
            morning,
            afternoon,
            totalTime
          }}
        >
          <Schedules />
          <Activities />
          <Information />
        </ControlContext.Provider>
      </div>

      <button type='submit'>Salvar</button>

      <ToastContainer />
    </form>
  )
}
