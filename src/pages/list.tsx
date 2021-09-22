import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { notification } from '../utils/notifications'

import Table from '../components/TableList'
import { ListProps } from '../interface/List'

export default function List() {
  const [list, setList] = useState<ListProps[]>([])
  const [desc, setDesc] = useState(false)

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const response = await axios.get('api/list')
    setList(response.data)
  }

  const sortArray = () => {
    list.sort((a, b) => {
      if (a.currentDate.slice(6, 8) > b.currentDate.slice(6, 8)) return 1
      if (a.currentDate.slice(6, 8) < b.currentDate.slice(6, 8)) return -1
      return 0
    })

    if (desc) list.reverse()

    setList(list)
    setDesc(!desc)
  }

  const deletePoint = (id: string) => {
    axios.delete('api/delete', { params: { id } })
    setList(list.filter((item) => item._id !== id))
    notification('deleted', 'Ponto deletado')
  }

  return (
    <Table
      list={list}
      desc={desc}
      sortArray={sortArray}
      deletePoint={deletePoint}
    />
  )
}
