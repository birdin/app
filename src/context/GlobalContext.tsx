import { createContext, useEffect, useState, useReducer } from "react";
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
  projects: [{name:'', description:'', id:''}],
  dispatchProjects: (props: any) => {},
  getTasksByProject: (id:string) => {}
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

const savedProjectsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];
    case "REMOVE_PROJECT":
      return state.filter((project: any) => project.id !== action.payload);
    case "UPDATE_PROJECT":
      return state.map((project: any) => {
        if (project.id === action.payload.id) {
          return action.payload;
        }
        return project;
      });
    default:
      return state;
  }
};

const initProjects = () => {
  const storageProjects = localStorage.getItem("projects");
  const parsedProjects = storageProjects
    ? JSON.parse(storageProjects)
    : [
        {
          name: "Project 1",
          description: "This is a project",
          id: "1",
        },
        {
          name: "Project 2",
          description: "This is a project but with more elements",
          id: "2",
          category: 'category-1'
        },
      ];
  return parsedProjects;
};

export const GlobalProvider = (props: any) => {
  const [data, setData] = useState(initEvents);
  const [isOpen, setIsOpen] = useState(true);
  const [projects, dispatchProjects] = useReducer(
    savedProjectsReducer,
    [],
    initProjects
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const onOpen = (props: boolean) => {
    setIsOpen(props);
  };

  const getTasksByProject = (id : string) => {
    const tasks = data.filter((el:any) => el.project == id)
    return tasks;
  }

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
        projects: projects,
        dispatchProjects: dispatchProjects,
        getTasksByProject: getTasksByProject
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
