import { getTodoInfo, projTodos, setTodoData } from "./logic";
import { clearToDo, renderProjs, renderTodos } from "./render";

const clickedEdit = (editButton, projId, todoId) => {
    
    editButton.addEventListener('click', () => {
        const todo = document.querySelectorAll('.list-item');
        // console.log(todo[todoId], projId, todoId);
        const docObject = todo[todoId];
        docObject.innerHTML = "";
        const formEl = createForm(todo.tite, todo.date, todo.prio, projId, todoId);
        docObject.appendChild(formEl);
    });
};

const submitEventListener = (submitButton, formInfo, projIndex, todoIndex) => {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let newTitle = formInfo[0].value;
        let newPrio = formInfo[1].value;
        let newDate = formInfo[2].value;
        setTodoData(projIndex, todoIndex, "name", newTitle);
        setTodoData(projIndex, todoIndex, "prio", newPrio);
        setTodoData(projIndex, todoIndex, "date", newDate);
        const projObj = projTodos(projIndex);
        clearToDo();
        renderTodos(projObj, projIndex);
    });
};

const cancelEventListener = (cancelButton, projId, todoId) => {
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projObj = projTodos(projId);
        clearToDo();
        renderTodos(projObj, projId);
    });
};

const createForm = (tite, date, prio, projId, todoId) => {
    const formEl = document.createElement('form');
    formEl.classList = "form-todo";

    const labelTitle = document.createElement('label');
    labelTitle.htmlFor = "editListTitle";
    labelTitle.innerText = "Title:";
    formEl.appendChild(labelTitle);

    const titleForm = document.createElement('input');
    titleForm.setAttribute("type", "text");
    titleForm.id = "editListTitle";
    titleForm.value = getTodoInfo(projId, todoId, "name");
    formEl.appendChild(titleForm);

    const labelPrio = document.createElement('label');
    labelPrio.htmlFor = "editListPrio";
    labelPrio.innerText = "Prio:";
    formEl.appendChild(labelPrio);

    const inputPrio = document.createElement('input');
    inputPrio.setAttribute("type", "text");
    inputPrio.id = "editListPrio";
    inputPrio.value = getTodoInfo(projId, todoId, "prio");
    formEl.appendChild(inputPrio);

    const labelDate = document.createElement('label');
    labelDate.htmlFor = "editListDate";
    labelDate.innerText = "Date:";
    formEl.appendChild(labelDate);

    const inputDate = document.createElement('input');
    inputDate.setAttribute("type", "date");
    inputDate.id = "editListDate";
    inputDate.value = getTodoInfo(projId, todoId, "date");
    formEl.appendChild(inputDate, formEl);

    const divEl = document.createElement('div');
    divEl.classList = "formbuttons";

    const updateBt = document.createElement('input');
    updateBt.setAttribute("type", "submit");
    updateBt.setAttribute("value", "Update");
    submitEventListener(updateBt, formEl, projId, todoId);

    const cancelBt = document.createElement('input');
    cancelBt.setAttribute("type", "submit");
    cancelBt.setAttribute("value", "Cancel");
    cancelEventListener(cancelBt, projId, todoId);

    divEl.appendChild(updateBt);
    divEl.appendChild(cancelBt);

    formEl.appendChild(divEl);
    return formEl;
};

export {clickedEdit};