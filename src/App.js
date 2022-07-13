import React, { useEffect, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  );
}

export default App