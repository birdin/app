import React, { useState } from "react";
import { initialData } from "../data/mockdata";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Column from "./Column";
import Card from "./Card";

const Board = () => {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    console.log(result);
  }  


  return (
    <>
      <h1>Board</h1>
      <div className="task-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId:any) => state.tasks[taskId]
            );

            return ( 
              <Column key={column.id} tasks={tasks} column={column}/>
            )
          })
          }
        </DragDropContext>
      </div>
    </>
  )
};

export default Board;
