import { useState, useEffect } from 'react'

import Form from './components/Form'
import Item from './components/item'
import Loading from './components/Loading'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const url = `${import.meta.env.VITE_BASE_URL}/api/users`

      try {
        const response = await fetch(url)
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [])


  return (
    <div>
      <h1>React Fetch</h1>

      <Form user={user} />

      {
        isLoading
          ? <Loading />
          : <ul>
            {users.map((user) => (
              <Item key={user.id} user={user} onSelectUser={setUser} />
            ))}
          </ul>
      }

    </div>
  )
}

export default App
