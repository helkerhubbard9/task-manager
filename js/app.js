import {StorageAppManager} from "./localstorage.js";
import {data} from "./data.js"
import { UI } from "./ui.js";
import { FormUI } from "./ui/form-ui.js";
import { CardUI } from "./ui/card-ui.js";

export const App = {
    init: function () {
        StorageAppManager.loadData(data);
        FormUI.initForm();
        
        UI.renderCards(data.tasks);
        
        UI.renderSections();
      },
}