import React, { useContext } from 'react'
import { ControlContext } from '../contexts/ControlContext'
import styles from '../styles/components/Activities.module.scss'

export default function Activities() {
  const { setMorningActivities, setAfternoonActivities } =
    useContext(ControlContext)

  return (
    <section className={styles.activities}>
      <h2>Atividades</h2>

      <div>
        <h3 className={styles.subtitle}>Manhã</h3>

        <textarea
          title='morningActivities'
          maxLength={150}
          onChange={(e) => setMorningActivities(e.target.value)}
        ></textarea>
      </div>

      <div>
        <h3 className={styles.subtitle}>Tarde</h3>

        <textarea
          title='afternoonActivities'
          maxLength={150}
          onChange={(e) => setAfternoonActivities(e.target.value)}
        ></textarea>
      </div>
    </section>
  )
}
