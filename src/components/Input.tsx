import React from 'react'
import NumberFormatted from 'react-number-format'
import styles from '../styles/components/Input.module.scss'

type IProps = {
  htmlFor: string
  children: React.ReactNode
  setData: (value: React.SetStateAction<string>) => void
}

export default function Input({ htmlFor, children, setData }: IProps) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={htmlFor}>{children}</label>

      <NumberFormatted
        id={htmlFor}
        format='##:##'
        mask='-'
        placeholder='00:00'
        onChange={(e) => setData(e.target.value)}
        required
      />
    </div>
  )
}
