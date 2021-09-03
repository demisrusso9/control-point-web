import React, { useContext } from 'react'
import { ControlContext } from '../contexts/ControlContext'
import Image from 'next/image'
import styles from '../styles/components/Information.module.scss'
import { calculateHrsAndMin } from '../utils/calculateTime'

export default function Information() {
  const { lunch, morning, afternoon, totalTime } = useContext(ControlContext)

  return (
    <section className={styles.information}>
      <h2>Informações</h2>

      <figure>
        <Image
          height={42}
          width={42}
          src='/icons/morning.svg'
          alt='Morning Icon'
        />
        <figcaption>
          <strong>Manhã: </strong>
          {calculateHrsAndMin(morning)}
        </figcaption>
      </figure>

      <figure>
        <Image height={42} width={42} src='/icons/lunch.svg' alt='Lunch Icon' />
        <figcaption>
          <strong>Almoço: </strong>
          {calculateHrsAndMin(lunch)}
        </figcaption>
      </figure>

      <figure>
        <Image
          height={42}
          width={42}
          src='/icons/sunset.svg'
          alt='Sunset Icon'
        />
        <figcaption>
          <strong>Tarde: </strong>
          {calculateHrsAndMin(afternoon)}
        </figcaption>
      </figure>

      <figure>
        <Image
          height={42}
          width={42}
          src='/icons/chronometer.svg'
          alt='Chronometer Icon'
        />
        <figcaption>
          <strong>Horas total:</strong> {totalTime}
        </figcaption>
      </figure>
    </section>
  )
}
