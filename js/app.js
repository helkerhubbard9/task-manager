import {StorageAppManager} from "./localstorage.js";
import {state} from "./data.js"
import { UI } from "./ui.js";

export const App = {
    init: function () {
        StorageAppManager.loadData(state);
        UI.init();
      },
}