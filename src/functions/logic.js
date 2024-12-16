let projects = [];

// making a few fake projects with a few sample projects and todo lists with dates?
// figuring out how to stringify and store the info and check if it already exists

let newproj = {
    name: "testproj",
    desc: "this is a test proj",
    todos: [],
};

projects.push(newproj);

const addNewProj = (name, desc) => {
    projects.push({
        name: name,
        desc: desc,
        todos: [],
    });
};

const removeProj = (proj) => {
    projects.reduce(projects.findIndex(proj),1);
};

const editProj = (projObject, editedObject) => {
    projects[projObject].name = editedObject.name;
    project[projObject].desc = editedObject.desc;
}

// add project
// remove project
// edit project

const logProject = () => {
    console.log(projects);
};

export {logProject, removeProj, editProj, addNewProj};