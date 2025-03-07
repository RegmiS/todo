
const clickedEdit = (editButton, projId, todoId) => {
    
    editButton.addEventListener('click', () => {
        const todo = document.querySelectorAll('.list-item');
        console.log(todo[todoId], projId, todoId);
        const docObject = todo[todoId];
        docObject.innerHTML = "";
        const formEl = createForm(todo.tite, todo.date, todo.prio);
        docObject.appendChild(formEl);
    });
};

const createForm = (tite, date, prio) => {
    const formEl = document.createElement('form');
    formEl.id = "editForm";
    formEl.classList = "form-todo";

    const labelTitle = document.createElement('label');
    labelTitle.htmlFor = "editListTitle";
    labelTitle.innerText = "Title:";
    formEl.appendChild(labelTitle);

    const titleForm = document.createElement('input');
    titleForm.setAttribute("type", "text");
    titleForm.id = "editListTitle";
    titleForm.placeholder = "Current title replace later";
    formEl.appendChild(titleForm);

    const labelPrio = document.createElement('label');
    labelPrio.htmlFor = "editListPrio";
    labelPrio.innerText = "Prio:";
    formEl.appendChild(labelPrio);

    const inputPrio = document.createElement('input');
    inputPrio.setAttribute("type", "text");
    inputPrio.id = "editListPrio";
    formEl.appendChild(inputPrio);

    const labelDate = document.createElement('label');
    labelDate.htmlFor = "editListDate";
    labelDate.innerText = "Date:";
    formEl.appendChild(labelDate);

    const inputDate = document.createElement('input');
    inputDate.setAttribute("type", "date");
    inputDate.id = "editListDate";
    formEl.appendChild(inputDate);

    const divEl = document.createElement('div');
    divEl.classList = "formbuttons";

    const updateBt = document.createElement('input');
    updateBt.setAttribute("type", "submit");
    updateBt.setAttribute("value", "Update");

    const cancelBt = document.createElement('input');
    cancelBt.setAttribute("type", "submit");
    cancelBt.setAttribute("value", "Cancel");

    divEl.appendChild(updateBt);
    divEl.appendChild(cancelBt);

    formEl.appendChild(divEl);
    return formEl;
};

export {clickedEdit};