import React, { useState, useEffect } from 'react'
import moment from 'moment'
import api from '../service/api'
import styles from '../styles/pages/List.module.scss'

type ListProps = {
  id: string
  morningEntry: string
  morningExit: string
  afternoonEntry: string
  afternoonExit: string
  morningActivities: string
  afternoonActivities: string
  currentDate: string
}

export default function List() {
  const [list, setList] = useState<ListProps[]>([])

  moment.locale('pt')

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const response = await api.get('/list')
    setList(response.data)
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Atividades Manhã</th>
            <th>Atividades Tarde</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td data-label={'Data'}>{item.currentDate}</td>
              <td data-label={'Inicio'}>{item.morningEntry}</td>
              <td data-label={'Fim'}>{item.morningExit}</td>
              <td data-label={'Inicio'}>{item.afternoonEntry}</td>
              <td data-label={'Fim'}>{item.afternoonExit}</td>
              <td data-label={'Atividades Manhã'}>{item.morningActivities}</td>
              <td data-label={'Atividades Tarde'}>
                {item.afternoonActivities}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
