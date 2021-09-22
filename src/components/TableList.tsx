import React from 'react'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from '../styles/components/TableList.module.scss'
import { ListProps } from '../interface/List'

type TableProps = {
  list: ListProps[]
  desc: boolean
  sortArray: () => void
  deletePoint: (id: string) => void
}

export default function TableList({
  list,
  desc,
  sortArray,
  deletePoint
}: TableProps) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th className={styles.sortTh} onClick={(e) => sortArray()}>
              Data
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
          {list.map((item, i) => (
            <tr key={item._id}>
              <td data-label={'ID'}>{i + 1}</td>
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
