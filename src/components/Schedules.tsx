import React, { useContext } from 'react'
import { ControlContext } from '../contexts/ControlContext'
import styles from '../styles/components/Schedules.module.scss'
import Input from './Input'

export default function Schedules() {
  const {
    setMorningEntry,
    setMorningExit,
    setAfternoonEntry,
    setAfternoonExit
  } = useContext(ControlContext)

  return (
    <section className={styles.schedules}>
      <h2>Horários</h2>

      <div>
        <h3 className={styles.subtitle}>Manhã</h3>

        <Input htmlFor='morningEntry' setData={setMorningEntry}>
          Entrada
        </Input>

        <Input htmlFor='morningExit' setData={setMorningExit}>
          Saída
        </Input>
      </div>

      <div>
        <h3 className={styles.subtitle}>Tarde</h3>

        <Input htmlFor='afternoonEntry' setData={setAfternoonEntry}>
          Entrada
        </Input>

        <Input htmlFor='afternoonExit' setData={setAfternoonExit}>
          Saída
        </Input>
      </div>
    </section>
  )
}
