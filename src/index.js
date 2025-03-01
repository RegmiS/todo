import "./style.css"
import { projList, addNewProj } from "./functions/logic";
import {renderProjs} from "./functions/render";
import { init_eventListeners } from "./functions/eventlisteners";

addNewProj("Project Test 1", "Description a");
addNewProj("Project Test 2", "Description b");

renderProjs(projList());

init_eventListeners();