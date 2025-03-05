import { projEventListener, iconEventListener, symbolEventListener } from "./eventlisteners";
import {getTodoInfo} from "./logic";

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
    return newProjectItem;
}

const renderTodos = (todoObj, projIndex) => {
    for (let i = 0; i < todoObj.length; i++){
        const newDiv = document.createElement('div');
        newDiv.classList = "list-item";
        
        const parItemPrio = genParItems(todoObj[i]["prio"]);
        newDiv.appendChild(parItemPrio);

        let checkboxItem;
        let parItemTodoName;
        if (!getTodoInfo(projIndex, i, "completed")){
            checkboxItem = materialIconSpan("check_box_outline_blank");
            parItemTodoName = genParItems(todoObj[i]["name"]);
        }
        else{
            checkboxItem = materialIconSpan("check_box");
            parItemTodoName = genParItems("<s>" + todoObj[i]["name"] + "</s>");
        }
        iconEventListener(checkboxItem, projIndex, i);
        newDiv.appendChild(checkboxItem);

        
        newDiv.appendChild(parItemTodoName);

        const parItemDate = genParItems(displayDate(todoObj[i]["date"]));
        newDiv.appendChild(parItemDate);

        const calenderIcon = materialIconSpan("calendar_month");
        symbolEventListener(calenderIcon, "calender icon", projIndex, i);
        newDiv.appendChild(calenderIcon);

        const editIcon = materialIconSpan("edit");
        symbolEventListener(editIcon, "edit icon", projIndex, i);
        newDiv.appendChild(editIcon);

        const deleteIcon = materialIconSpan("delete");
        symbolEventListener(deleteIcon, "delete icon", projIndex, i);
        newDiv.appendChild(deleteIcon);

        todoDoc.appendChild(newDiv);
    }
};

const renderProjDesc = (descName) => {
    const projD = document.querySelector('#proj-desc');
    projD.innerHTML = descName;
};

const renderProjs = (projObj) => {
    for (let i = 0; i < projObj.length; i++) {
        const projItem = renderProjects(projObj[i]);
        projEventListener(projItem, i);
        if (i==0){
            renderTodos(projObj[i]["todos"], i);
            renderProjDesc(projObj[i]["desc"]);
            addUnderLineProj(i);
        };
    }
};

export { renderTodos, clearToDo, renderProjs, resetClassList, addUnderLineProj, renderProjDesc};
