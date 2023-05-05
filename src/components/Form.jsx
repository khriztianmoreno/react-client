import { useState } from 'react'

const Form = ({ user }) => {
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      }

      const url = `${import.meta.env.VITE_BASE_URL}/api/users`

      const response = await fetch(url, options)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder='Name'
          required
          onChange={handleChange}
          defaultValue={user.name}
        />
      </div>
      <div>
        <input
            type="email"
            name="email"
            placeholder='Email'
            required
            onChange={handleChange}
            defaultValue={user.email}
          />
      </div>
      <div>
        <input
          type="text"
          name="username"
          placeholder='Username'
          onChange={handleChange}
          required
          defaultValue={user.username}
        />
      </div>

      <button type="submit">
        Crear
      </button>
    </form>
  )
}

export default Form
