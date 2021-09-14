import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { notification } from '../utils/notifications'
import 'react-toastify/dist/ReactToastify.css'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import styles from '../styles/pages/List.module.scss'

type ListProps = {
  _id: string
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
  const [desc, setDesc] = useState(false)

  moment.locale('pt')

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const response = await axios.get('api/list')
    setList(response.data)
  }

  const sortArray = () => {
    list.sort((a, b) => {
      if (a.currentDate > b.currentDate) return 1
      if (a.currentDate < b.currentDate) return -1
      return 0
    })

    if (desc) list.reverse()

    setList(list)
    setDesc(!desc)
  }

  const deletePoint = (id: string) => {
    axios.delete('api/delete', { data: { id: id } })
    setList(list.filter((item) => item._id !== id))
    notification('deleted', 'Ponto deletado')
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={(e) => sortArray()}>
              Data{' '}
              {desc ? <BsArrowBarUp size={22} /> : <BsArrowBarDown size={22} />}
            </th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Atividades Manhã</th>
            <th>Atividades Tarde</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item._id}>
              <td data-label={'Data'}>{item.currentDate}</td>
              <td data-label={'Inicio'}>{item.morningEntry}</td>
              <td data-label={'Fim'}>{item.morningExit}</td>
              <td data-label={'Inicio'}>{item.afternoonEntry}</td>
              <td data-label={'Fim'}>{item.afternoonExit}</td>
              <td data-label={'Atividades Manhã'}>{item.morningActivities}</td>
              <td data-label={'Atividades Tarde'}>
                {item.afternoonActivities}
              </td>
              <td>
                <MdDelete
                  size={22}
                  color='red'
                  onClick={(e) => deletePoint(item._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  )
}
