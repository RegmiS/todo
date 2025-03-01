import "./style.css"
import { logProject, removeProj, editProj, addNewProj, projValues } from "./functions/logic";
import { renderProj } from "./functions/render";
// import { init_eventListeners } from "./functions/eventlisteners";

addNewProj("testone", "desc1");
// logProject();
// console.log(projValues()[0]);
// let testTodoRender = projects[0];
renderProj(projValues());

const init_eventListeners = () => {
    const btn = document.querySelector('#project-items');
    btn.addEventListener('click', () => {
        console.log(btn);
    });
}
init_eventListeners();