import React from 'react'

type Props = {
    task: any,
    index: number
}

const Card = ({task, index}:Props) => {
  return (
    <div key={task.id} id={task.id} className="kanban-card"> Column {task.content}</div>
  )
}

export default Card