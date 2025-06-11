import { CardUI } from "./ui/card-ui.js"

export const UI = {

    renderCards: function (taskList) {
        taskList.map( card => CardUI.renderCard(card));
    },

    renderSections: function (data){

    },

    
    
}