import React, { FormEvent, useState, useEffect } from 'react'
import axios from 'axios'

import Schedules from '../components/Schedules'
import Information from '../components/Information'
import Activities from '../components/Activities'
import SelectInput from '../components/Select'

import { notification } from '../utils/notifications'
import { getTotalMinutes } from '../utils/calculateTime'
import { ControlContext } from '../contexts/ControlContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from '../styles/pages/Home.module.scss'

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

  // Verify input to update information
  const [verify, setVerify] = useState(0)

  // Calculate times
  const lunch = getTotalMinutes(morningExit, afternoonEntry)
  const morning = getTotalMinutes(morningEntry, morningExit)
  const afternoon = getTotalMinutes(afternoonEntry, afternoonExit)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    add()
    notification('added', 'Ponto adicionado')
  }

  const add = () => {
    // Serverless Vercel
    axios.post('api/create', {
      currentDate,
      morningEntry,
      morningExit,
      afternoonEntry,
      afternoonExit,
      morningActivities,
      afternoonActivities
    })
  }

  const verifyInputs = () => {
    morningEntry && setVerify(verify + 1)
    morningExit && setVerify(verify + 1)
    afternoonEntry && setVerify(verify + 1)
    afternoonExit && setVerify(verify + 1)
  }

  useEffect(() => {
    verifyInputs()
  }, [morningEntry, morningExit, afternoonEntry, afternoonExit])

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
            verify
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
