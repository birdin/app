import { createContext, useEffect, useState } from "react";
import { init, initialState } from "./data/defaultData";

export const GlobalContext = createContext({
  state: initialState,
  modal: {
    open: false,
    onOpen: (props: boolean) => {},
  },
  addData: (task: any) => {},
  data: {},
  setData: (props: any) => {},
  getTask: (id: string) => {},
});

function initEvents() {
  const storageEvents = localStorage.getItem("tasks");
  const parsedEvents = storageEvents
    ? JSON.parse(storageEvents)
    : {
        tasks: {},
        columns: {
            "column-1": {
              id: "column-1",
              title: "To do",
              taskIds: [],
            },
            "column-2": {
              id: "column-2",
              title: "Today",
              taskIds: [],
            },
            "column-3": {
              id: "column-3",
              title: "In progress",
              taskIds: [],
            },
            "column-4": {
              id: "column-4",
              title: "Done",
              taskIds: [],
            },
          },
          // Facilitate reordering of the columns
          columnOrder: ["column-1", "column-2", "column-3", "column-4"],
        };
  return parsedEvents;
}

export const GlobalProvider = (props: any) => {
  const [data, setData] = useState(initEvents);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const onOpen = (props: boolean) => {
    setIsOpen(props);
  };

  const modal = {
    open: isOpen,
    onOpen: onOpen,
  };

  const addTask = (task: any) => {
    setData({
      ...data,
      tasks: {
        ...data.tasks,
        [task.id]: task,
      },
      columns: {
        ...data.columns,
        "column-1": {
          ...data.columns["column-1"],
          taskIds: [task.id, ...data.columns["column-1"].taskIds],
        },
      },
    });
  };

  const getTask = (id: string) => {
    return data?.tasks[id];
  };

  return (
    <GlobalContext.Provider
      value={{
        state: initialState,
        modal: modal,
        addData: addTask,
        data: data,
        setData: setData,
        getTask: getTask,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
