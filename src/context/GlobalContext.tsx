import { createContext, useReducer, useState } from "react";

export const init = {
    tasks: {
        'task-1': { id: 'task-1', dueDate:'3/25/2023', members:["Carlos"], name:"Finish new dashboard", content: 'Complete dashboard design' },
        'task-2': { id: 'task-2', members:[], name:"Update styles", content: 'Add new responsibe styles of the new template' },
        'task-3': { id: 'task-3', dueDate:'3/28/2023', members:[], name:"Create table component", content: 'Code new search table using custom hooks' },
        'task-4': { id: 'task-4', members:["Carlos"], name:"Create design 'user page'", content: 'Design template based on use cases for user page' },
        'task-5': { id: 'task-5', dueDate:'3/4/2023', members:["Carlos"], name:"Fix homepage responsive styles", content: 'Fix navbar styles which doesnt work properly' },
        'task-6': { id: 'task-6', members:[], name:"Add modal form", content: 'Create new modal for add component' },
        'task-7': { id: 'task-7', members:[], name:"Create new task template", content: 'Define alternative design for project tasks' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Today',
            taskIds: ['task-5'],
        },
        'column-3': {
            id: 'column-3',
            title: 'In progress',
            taskIds: ['task-6'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Done',
            taskIds: ['task-7'],
        }
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};



const initialState = {
    user: {
        id: 1,
        name: "Carlos",
        email: "",
        avatar: "https://i.pravatar.cc/150?img=1",
        projects: [
            {
                id: 1,
                name: "La Forma",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
                status: "active",
                type: "public",
                img: 'https://assets.codigohabil.com/img/laforma.png',
                deadline: "10/12/2023",
                members: [

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

                ],
            },
        ]
    }
}

export const GlobalContext = createContext({
        state: initialState,
        modal: {
            open: false,
            onOpen: (props:boolean) => {},
        },
        addData: (task:any) => {},
        data: {},
        setData: (props:any) => {
        }
    }
);


export const GlobalProvider = (props:any) => {
    const [data, setData] = useState(init);
    const [isOpen, setIsOpen] = useState(true);
    const onOpen = (props:boolean) => {
        setIsOpen(props);
    }
    const modal = {
        open: isOpen,
        onOpen: onOpen,
    }

    const addTask = (task:any) => {
        setData({
            ...data,
            tasks:{
                ...data.tasks,
                [task.id]: task
            },
            columns:{
                ...data.columns,
                'column-1':{
                    ...data.columns['column-1'],
                    taskIds: [task.id, ...data.columns['column-1'].taskIds]
                }
            }
        })
    }

    /*
    const addTask = (task:any) => {
        const newTask = {
            id: task.id,
            name: task.name,
            content: task.content,
            dueDate: task.dueDate,
            members: task.members,
        }
        //setData();
    }*/

    
    return <GlobalContext.Provider value={{
        state: initialState,
        modal: modal,
        addData: addTask,
        data: data,
        setData: setData,
    }
    }>{props.children}</GlobalContext.Provider>
}
    

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