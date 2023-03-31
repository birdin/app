import { createContext, useState } from "react";
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

export const GlobalProvider = (props: any) => {
  const [data, setData] = useState(init);
  const [isOpen, setIsOpen] = useState(true);
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

/*
const initialState = {
    user: {
        id: 1,
        name: "Carlos",
        email: "
        avatar: "https://i.pravatar.cc/150?img=1",
        projects: [
            {
                id: 1,
                name: "Project 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
                status: "active",
                type: "public",
                deadline: "10/12/2023",
                members: [
                    {
                        id: 1,
                        name: "Carlos",
                        email: ""
                        avatar: "https://i.pravatar.cc/150?img=1",
                    },
                    {
                        id: 2,
                        name: "John",
                        email: ""
                        avatar: "https://i.pravatar.cc/150?img=2",
                    },
                    {
                        id: 3,
                        name: "Jane",
                        email: ""
                        avatar: "https://i.pravatar.cc/150?img=3",
                    },
                ],
                categories: [
                    {
                        id: 1,
                        name: "Architecture",
                    },
                    {
                        id: 2,
                        name: "Web",
                    },
                ],
                tasks: [
                    {
                        id: 1,
                        name: "Finish new dashboard",
                        content: "Take out the garbage",
                        dueDate: "3/25/2023",
                        members: [
                            {
                                id: 1,
                                name: "Carlos",
                                email: ""
                                avatar: "https://i.pravatar.cc/150?img=1",
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Update styles",
                        content: "Watch my favorite show",
                        dueDate: "3/28/2023",
                        members: [
                            {
                                id: 1,
                                name: "Carlos",
                                email: ""
                                avatar: "https://i.pravatar.cc/150?img=1",
                            },
                        ],
                    },
                ]
            },
        }
    }

*/
