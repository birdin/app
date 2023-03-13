import { createContext, useReducer, useState } from "react";

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
                img: 'https://scontent.fmex10-2.fna.fbcdn.net/v/t39.30808-6/305204083_417435730523292_5046221284460135404_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=P-QcpSynuNoAX8VwZjH&_nc_ht=scontent.fmex10-2.fna&oh=00_AfAN9UFJSRcEwCvlVIwYOKAe9sCOGlrtsZjXGCuvXpfULg&oe=64105758',
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
        }
    }
);

export const GlobalProvider = (props:any) => {
    const [isOpen, setIsOpen] = useState(true);
    const onOpen = (props:boolean) => {
        setIsOpen(props);
    }
    const modal = {
        open: isOpen,
        onOpen: onOpen,
    }

    return <GlobalContext.Provider value={{
        state: initialState,
        modal: modal,
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