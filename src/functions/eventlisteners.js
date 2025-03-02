import {projTodos, projDesc, getTodoInfo, setTodoData} from './logic';
import { resetClassList, addUnderLineProj, renderProjDesc, clearToDo, renderTodos } from "./render";

const init_eventListeners = () => {
    const addPItem = document.querySelector('#project-items');
    addPItem.addEventListener('click', () => {
        console.log("add project item");
    });

    const addTItem = document.querySelector('#list-items');
    addTItem.addEventListener('click', () => {
        console.log("add to do item")
    });
};

const resetTodos = (index) => {
    clearToDo();
    renderTodos(projTodos(index), index);
};

const projEventListener = (projObject, index) => {
    projObject.addEventListener('click', () => {
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

export {init_eventListeners, projEventListener, iconEventListener};