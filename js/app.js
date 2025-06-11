import {StorageAppManager} from "./localstorage.js";
import { createCard } from "./cards.js";
export const App = {
    data : {
            completedTasks: 0,
            pendingTasks: 0,
            tasks: [],
            globalIdCounter: 0
    },
    init: function () {
        this.data = StorageAppManager.loadData();
        // rederizar los componentes del ui


        createCard({
    title: "Hacer tarea",
    description: "Terminar el proyecto de software",
    priority: "Alta",
    status: "Pendiente",
    completed: false
});

createCard({
    title: "Revisar correo",
    description: "Responder mensajes importantes",
    priority: "Media",
    status: "Pendiente",
    completed: false
});

      }
}