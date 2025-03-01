const deleteCall = () => {
    console.log("delete items");
};

// const buttonthing = document.querySelector('#edit-cal');
// buttonthing.addEventListener('click', functionCall);

// const buttontwo = document.querySelector('#del-todo');
// buttontwo.addEventListener('click', deleteCall);

const todoDoc = document.querySelector('#todo-items');

const clearToDo = () => {
    todoDoc.innerHTML = "";
};

const genParItems = (parName) => {
    const parItem = document.createElement('p');
    parItem.innerHTML = parName;
    return parItem;
};

const materialIconSpan = (iconName) => {
    const matSpan = document.createElement('span');
    matSpan.classList = "material-symbols-rounded";
    matSpan.innerHTML = iconName;
    return matSpan;
};

const displayDate = (dateObj) => {
    const date = new Date(dateObj);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate;
}

const resetClassList = () => {
    const projectList = document.querySelectorAll('.projects');
    const childrenList = projectList[0].children;
    for (let i = 0; i < childrenList.length; i++){
        childrenList[i].classList = "project-item";
    }
}

const addUnderLineProj = (projIndex) => {
    const projectList = document.querySelectorAll('.projects');
    projectList[0].children[projIndex].classList = "project-item cur-proj";
}

const renderProjects = (projObj) => {
    const projectList = document.querySelector('.projects');

    const newProjectItem = document.createElement('div');
    newProjectItem.classList = "project-item";

    const projName = document.createElement('h2');
    projName.classList = "text-item";
    projName.innerHTML = projObj["name"];
    newProjectItem.appendChild(projName);
    const editProjItem = document.createElement('span');
    editProjItem.classList = "material-symbols-rounded";
    editProjItem.innerHTML = 'edit';
    editProjItem.id = 'edit-project-item';
    newProjectItem.appendChild(editProjItem);

    projectList.appendChild(newProjectItem);
}

const renderTodos = (todoObj) => {
    for (let i = 0; i < todoObj.length; i++){
        const newDiv = document.createElement('div');
        newDiv.classList = "list-item";

        newDiv.appendChild(genParItems(todoObj[i]["prio"]));
        newDiv.appendChild(materialIconSpan("check_box_outline_blank"));
        newDiv.appendChild(genParItems(todoObj[i]["name"]));
        newDiv.appendChild(genParItems(displayDate(todoObj[i]["date"])));
        newDiv.appendChild(materialIconSpan("calendar_month"));
        newDiv.appendChild(materialIconSpan("edit"));
        newDiv.appendChild(materialIconSpan("delete"));

        todoDoc.appendChild(newDiv);
    }
};

const renderProjs = (projObj) => {
    // render Description and Project Names
    // render toods of first project and show that the first project is selected

    for (let i = 0; i < projObj.length; i++) {
        renderProjects(projObj[i]);
        if (i==0){
            renderTodos(projObj[i]["todos"]);
            addUnderLineProj(i);
        };
    }
}

export { renderTodos, clearToDo, renderProjs, resetClassList };
