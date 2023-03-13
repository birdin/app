import { useContext } from "react";
import { Draggable, Droppable} from "@hello-pangea/dnd";
import Card from './Card'
import { GlobalContext } from "../../../context/GlobalContext";

type Props = {
    column: any,
    tasks: any
}

const Column = ({tasks, column}:Props) => {
 const {modal} = useContext(GlobalContext)

  return (
    <div className="kanban-column">
        <div className="kanban-column__header">
            <div className={tasks.length > 0 ? 'status-indicator status-indicator--in-progress' : 'status-indicator'} />
            <h3 className="kanban-column__title">{column.title}</h3>
            <div className={tasks.length > 0 ? 'count-block' : ''}>
                <span>
                    { tasks.length > 0 && tasks.length  }
                </span>
            </div>
        </div>
        <Droppable droppableId={column.id}>
            {(provided, snapchot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="kanban-column__tasks"
                >
                    <div className="kanban-column__tasks-container">

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
                    <div>
                        <button className="task-add__btn" onClick={()=>{ modal.onOpen(true)} }>+ Add task</button>
                    </div>
                </div>
            )}
        </Droppable>
    </div>
  )
}

export default Column