import React, { ReactNode } from 'react'
import { Draggable, Droppable} from "@hello-pangea/dnd";
import { StrictModeDroppable } from './StrictModeDroppable';
import Card from './Card'

type Props = {
    column: any,
    tasks: any
}

const Column = ({tasks, column}:Props) => {
  return (
    <div>
        <div>Column</div>
        <Droppable droppableId={column.id}>
            {(provided, snapchot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {tasks.map((task:any, index:number) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(draggableProvided, snapshot) => (
                                <div
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                >
                                    <Card task={task} index={index}/>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
  )
}

export default Column