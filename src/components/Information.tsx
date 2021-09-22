import React, { useContext } from 'react'
import { ControlContext } from '../contexts/ControlContext'

import styles from '../styles/components/Information.module.scss'
import { getHoursAndMinutes } from '../utils/calculateTime'
import { FiSun, FiSunset } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { GiCampCookingPot } from 'react-icons/gi'

export default function Information() {
  const { lunch, morning, afternoon, verify } = useContext(ControlContext)
  const totalTime = getHoursAndMinutes(morning + afternoon)

  return (
    <section className={styles.information}>
      <h2>Informações</h2>

      <div>
        <p>
          <FiSun color='yellow' />
          <span>
            <strong>Manhã: </strong>
            {verify === 4 && getHoursAndMinutes(morning)}
          </span>
        </p>
      </div>

      <div>
        <p>
          <GiCampCookingPot color='lightgreen' />
          <span>
            <strong>Almoço: </strong>
            {verify === 4 && getHoursAndMinutes(lunch)}
          </span>
        </p>
      </div>

      <div>
        <p>
          <FiSunset color='lightsalmon' />
          <span>
            <strong>Tarde: </strong>
            {verify === 4 && getHoursAndMinutes(afternoon)}
          </span>
        </p>
      </div>

      <div>
        <p>
          <BiTimeFive color='lightblue' />
          <span>
            <strong>Horas total: </strong>
            {verify === 4 && totalTime}
          </span>
        </p>
      </div>
    </section>
  )
}
