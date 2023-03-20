import React, { useContext, useEffect, usedata } from "react";
import { initialData } from "../data/mockdata";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Column from "./Column";
import Card from "./Card";
import { GlobalContext } from "../../../context/GlobalContext";

const Board = () => {
  //const [data, setData] = usedata(initialData);
  const { data, setData } = useContext(GlobalContext);


  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    if (!destination) {
      return;
    }

    // If the user drops the item in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    // Moving within the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newdata = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newdata);
      return;
    }

    // Moving from one list to another
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

      const newdata = {
        ...data,
        columns: {
          ...data.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      setData(newdata);
      return;
    }
  
  }  

  return (
    <>
      <div className="task-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {data.columnOrder.map((columnId:any) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId:any) => data.tasks[taskId]
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
