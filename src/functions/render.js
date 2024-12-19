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

const renderTodos = (projObj) => {
    const newDiv = document.createElement('div');
    newDiv.classList = "list-item";

    newDiv.appendChild(genParItems("prio"));
    newDiv.appendChild(materialIconSpan("check_box_outline_blank"));
    newDiv.appendChild(genParItems("Item name"));
    newDiv.appendChild(genParItems("date"));
    newDiv.appendChild(materialIconSpan("calendar_month"));
    newDiv.appendChild(materialIconSpan("edit"));
    newDiv.appendChild(materialIconSpan("delete"));
    
    todoDoc.appendChild(newDiv);
};

export {renderTodos, clearToDo};