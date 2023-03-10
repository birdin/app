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
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    if(start !== finish){
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      setState(newState);
      return;
    }
  
  }  


  return (
    <>
      <div className="task-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnOrder.map((columnId:string) => {
            const column = state.columns[columnId]
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
