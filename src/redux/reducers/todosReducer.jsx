const todosInit = [
    {
        id: 1,
        title: 'makan',
        complted: false
    },
    {
        id: 2,
        title: 'minum',
        completed: false
    }
];

const todosReducer = (state = todosInit, action) => {
    switch (action.type) {
        case 'ADD':
            return state=action.payload
        default:
            return state;
    }
};

export default todosReducer;