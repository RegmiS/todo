let projects = [];

let curProj = 0;

const getCurProj = () => {
    return curProj;
}

const updateCurProj = (val) => {
    curProj = val;
}

const generateFakeObj = (val, projName) => {
    let fakeTodoObj = {
        prio: 1,
        completed: false,
        name: `${projName} -  item ${val} - work on proj`,
        date: Date.now()
    }
    return fakeTodoObj;
}

const addNewProj = (name, desc) => {
    projects.push({
        name: name,
        desc: desc,
        todos: [generateFakeObj('one', name), generateFakeObj('two', name)],
    });
};

const removeProj = (proj) => {
    projects.splice(_.indexOf(projects, _.findWhere(projects, proj)), 1);
};

const editProj = (projObject, editedObject) => {
    projects[projObject].name = editedObject.name;
    projects[projObject].desc = editedObject.desc;
};

const projTodos = (projIndex) => {
    return projList()[projIndex]["todos"];
};

const projDesc = (projIndex) => {
    return projList()[projIndex]["desc"];
}

const projList = () => {
    return projects;
};

const logProject = () => {
    console.log(projects);
};

const getTodoInfo = (projectIndex, todoIndex, dataType) => {
    return projList()[projectIndex]["todos"][todoIndex][dataType];
}

const setTodoData = (projectIndex, todoIndex, dataType, newData) => {
    projects[projectIndex]["todos"][todoIndex][dataType] = newData;
}

export { logProject, removeProj, editProj, addNewProj, projTodos, projList, projDesc, getTodoInfo, setTodoData, getCurProj, updateCurProj };
