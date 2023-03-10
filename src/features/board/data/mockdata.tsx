export const initialData = {
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
