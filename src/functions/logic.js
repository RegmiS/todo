let projects = [];

// making a few fake projects with a few sample projects and todo lists with dates?
// figuring out how to stringify and store the info and check if it already exists

const generateFakeObj = (val) => {
    let fakeTodoObj = {
        prio: 1,
        completed: false,
        name: `item ${val} - work on proj`,
        date: Date.now()
    }
    return fakeTodoObj;
}

const addNewProj = (name, desc) => {
    projects.push({
        name: name,
        desc: desc,
        todos: [generateFakeObj('one'), generateFakeObj('two')]
    });
};

const removeProj = (proj) => {
    projects.splice(_.indexOf(projects, _.findWhere(projects, proj)), 1);
};

const editProj = (projObject, editedObject) => {
    projects[projObject].name = editedObject.name;
    projects[projObject].desc = editedObject.desc;
};

const projValues = () => {
    return projects[0]["todos"];
};

const logProject = () => {
    console.log(projects);
};

export { logProject, removeProj, editProj, addNewProj, projValues };
