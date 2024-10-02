import React, { useState, useEffect } from 'react'

const Database = () => {

    const [task, setTask] = useState([]);
    const [task1, setTask1] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/todo', {
            method: 'GET'
        }).then((result) => {
            return result.json()
        }).then((res) => {
            console.log(res);
            setTask(res)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/users', {
            method: 'GET'
        }).then((result) => {
            return result.json()
        }).then((res) => {
            console.log(res);
            setTask1(res)
        })
    }, [])

    

  return (
      <>
          {task.map((response) => {
            return (
            <div key={response.id}>
                <h2>{response.task}</h2>
            </div>
            )
        })}
          {task1.map((respo) => {
            return (
            <div key={respo.id}>
                <p>{respo.name}</p>
            </div>
            )
        })}
      </>
  )
}

export default Database