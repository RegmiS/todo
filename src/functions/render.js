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

const renderTodos = (todoObj, index) => {
    console.log(todoObj);
    const newDiv = document.createElement('div');
    newDiv.classList = "list-item";

    newDiv.appendChild(genParItems(todoObj["prio"]));
    newDiv.appendChild(materialIconSpan("check_box_outline_blank"));
    newDiv.appendChild(genParItems(todoObj["name"]));
    newDiv.appendChild(genParItems(displayDate(todoObj["date"])));
    newDiv.appendChild(materialIconSpan("calendar_month"));
    newDiv.appendChild(materialIconSpan("edit"));
    newDiv.appendChild(materialIconSpan("delete"));

    todoDoc.appendChild(newDiv);
};

const renderProj = (projObj) => {
    for (let i = 0; i < projObj.length; i++) {
        renderTodos(projObj[i], i);
    }
}

export { renderTodos, clearToDo, renderProj };
