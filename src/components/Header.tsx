import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>Inicio</Link>
      <Link href='/list'>Pontos</Link>
    </header>
  )
}
