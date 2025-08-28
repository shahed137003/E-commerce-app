import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UsersContext = createContext()

export default function UserData({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users').then((resp) => {
      setUsers(resp.data)
    })
  }, [])

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}
