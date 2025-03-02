import {projTodos, projDesc} from './logic';
import { resetClassList, addUnderLineProj, renderProjDesc, resetTodos, renderTodos } from "./render";

const init_eventListeners = () => {
    const addPItem = document.querySelector('#project-items');
    addPItem.addEventListener('click', () => {
        console.log("add project item");
    });

    const addTItem = document.querySelector('#list-items');
    addTItem.addEventListener('click', () => {
        console.log("add to do item")
    });
    
}

const projEventListener = (projObject, index) => {
    projObject.addEventListener('click', () => {
        resetClassList();
        addUnderLineProj(index);
        resetTodos();
        renderProjDesc(projDesc(index));
        renderTodos(projTodos(index));
    });
};

export {init_eventListeners, projEventListener};