import { state } from "./state.js";
import { CardUI } from "./ui/card-ui.js"
import { FormUI } from "./ui/form-ui.js";
import { HardResetUI } from "./ui/hard-reset-ui.js";
import { SummaryUI } from "./ui/summary-ui.js";

export const UI = {

    init(){
        FormUI.init();
        HardResetUI.init();
        this.renderCards(state.tasks);
        this.renderSections();
    },

    renderCards(taskList) {
        taskList.map( card => CardUI.renderCard(card));
    },

    renderSections(){
        if (state.tasks.length > 0){
            $("#summary-section").show();
            $("#tasks-section").show();
            SummaryUI.renderCounters();
        } else {
            $("#summary-section").hide();
            $("#tasks-section").hide();
            SummaryUI.renderCounters();
        }
    },

    
    
}