import {projTodos, projDesc, getTodoInfo, setTodoData, getCurProj, updateCurProj, addNewTodo, projList, removeTodo} from './logic';
import { resetClassList, addUnderLineProj, renderProjDesc, clearToDo, renderTodos, renderProjs } from "./render";


const hideAddItem = () => {
    const addItemSection = document.querySelector('#list-items');
    addItemSection.classList = "add-items hidden";
    const addTodo = document.querySelector('#add-item-todo');
    addTodo.classList = "add-items-todo active";
};

const displayAdditem = () => {
    const addItemSection = document.querySelector('#list-items');
    addItemSection.classList = "add-items active";
    const addTodo = document.querySelector('#add-item-todo');
    addTodo.classList = "add-items-todo hidden";
}

const init_eventListeners = () => {
    const addPItem = document.querySelector('#project-items');
    addPItem.addEventListener('click', () => {
        console.log("add project item");
    });

    const addTItem = document.querySelector('#list-items');
    addTItem.addEventListener('click', () => {
        hideAddItem();
    });

    const todoFormCancel = document.querySelector('#todo-form-cancel');
    todoFormCancel.addEventListener('click', (e) => {
        e.preventDefault();
        displayAdditem();
    });

    const todoFormAddTodo = document.querySelector('#todo-form-add');
    todoFormAddTodo.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('#formaddtodo')[0].value;
        const prio = document.querySelector('#formaddtodo')[1].value;
        const date = document.querySelector('#formaddtodo')[2].value;
        addNewTodo(getCurProj(), prio, name, date);
        const todos = projList()[getCurProj()]["todos"];
        clearToDo();
        renderTodos(todos, getCurProj());
        displayAdditem();
    });
};

const resetTodos = (index) => {
    clearToDo();
    renderTodos(projTodos(index), index);
};

const projEventListener = (projObject, index) => {
    projObject.addEventListener('click', () => {
        updateCurProj(index);
        //console.log(getCurProj());
        resetClassList();
        addUnderLineProj(index);
        renderProjDesc(projDesc(index));
        resetTodos(index);
    });
};

const iconEventListener = (iconObject, projIndex, todoIndex) => {
    iconObject.addEventListener('click', () => {
        if(getTodoInfo(projIndex, todoIndex, "completed")){
            setTodoData(projIndex, todoIndex, "completed", false);
            resetTodos(projIndex);
        }
        else{
            setTodoData(projIndex, todoIndex, "completed", true);
            resetTodos(projIndex);
        }
    });
};

const symbolEventListener = (symbolObject, symbolType, projIndex, todoIndex) => {
    symbolObject.addEventListener('click', () => {
        if(symbolType == "delete icon"){
            removeTodo(projIndex, todoIndex);
            resetTodos(projIndex);
        };
    });
};

export {init_eventListeners, projEventListener, iconEventListener, symbolEventListener};