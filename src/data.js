const data  = {
    tasks : {
        'task-1' : {id : 'task-1' , content :'Take out the trash!!'},
        'task-2' : {id : 'task-2' , content :'make something to eat!!'},
        'task-3' : {id : 'task-3' , content :'start your daily hour of algo'},
        'task-4' : {id : 'task-4' , content :'read Quran !!'},
    },
    columns : {
        'column-1' : {
            id : 'column-1',
            title : 'To do',
            taskIds : ['task-1','task-2','task-3','task-4'],
        },
        'column-2' : {
            id : 'column-2',
            title : 'In Progress',
            taskIds : [],
        },
        'column-3' : {
            id : 'column-3',
            title : 'Done',
            taskIds : [],
        },
    } ,
    // Facilitate reordring the columns
    columnOrder : ['column-1','column-2','column-3'],
};

export default data ;








































