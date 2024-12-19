import "./style.css"
import {logProject, removeProj, editProj, addNewProj, projValues} from "./functions/logic";
import { renderTodos } from "./functions/render";

addNewProj("testone", "desc1");
logProject();
console.log(projValues()[0]);
// let testTodoRender = projects[0];
renderTodos();