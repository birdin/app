import React from 'react'

type Props = {
    task: any,
    index: number
}

const Card = ({task, index}:Props) => {
    console.log(task)
  return (
    <div key={task.id} id={task.id}> Column {task.content}</div>
  )
}

export default Card