import { data } from "./data.js";
import { CardUI } from "./ui/card-ui.js"
import { Summary } from "./ui/summary-ui.js";

export const UI = {

    renderCards: function (taskList) {
        taskList.map( card => CardUI.renderCard(card));
    },

    renderSections: function (){
        console.log(data)
        if (data.tasks.length > 0){
            $("#summary-section").show();
            $("#tasks-section").show();
            Summary.renderCounters();
        } else {
            $("#summary-section").hide();
            $("#tasks-section").hide();
            Summary.renderCounters();
        }
    },

    
    
}