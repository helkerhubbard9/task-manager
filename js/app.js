import {StorageAppManager} from "./localstorage.js";
import {data} from "./data.js"
import { UI } from "./ui.js";
import { FormUI } from "./ui/form-ui.js";

export const App = {
    init: function () {
        StorageAppManager.loadData(data);
        FormUI.initForm();

        data.tasks.push(
        {
            id: data.globalIdCounter++,
            title: "Hacer tarea",
            description: "Terminar el proyecto de software",
            priority: "high",
            status: "Pendiente",
            completed: false
        },
        {
            id: data.globalIdCounter++,
            title: "Revisar correo",
            description: "Responder mensajes importantes",
            priority: "mid",
            status: "Pendiente",
            completed: false
        });
 
        UI.renderCards(data.tasks);
       
      }
}