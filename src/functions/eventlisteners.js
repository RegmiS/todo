import { logProject, addNewProj, removeProj, editProj } from "./logic";
import { resetClassList } from "./render";

// let a = 1;
// const functionCall = () => {
//     addNewProj(a.toString(), a.toString());
//     a += 1;
//     logProject();
// };

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


export {init_eventListeners};