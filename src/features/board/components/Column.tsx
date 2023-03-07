import { Draggable, Droppable} from "@hello-pangea/dnd";
import Card from './Card'

type Props = {
    column: any,
    tasks: any
}

const Column = ({tasks, column}:Props) => {
  return (
    <div className="kanban-column">
        <h3>{column.title}</h3>
        <Droppable droppableId={column.id}>
            {(provided, snapchot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="kanban-column__tasks"
                >
                    {tasks.map((task:any, index:number) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(draggableProvided, snapshot) => (
                                <div
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                    className="kanban-card__container"
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