import { state } from "./state.js";
import { CardUI } from "./ui/card-ui.js";
import { FormUI } from "./ui/form-ui.js";
import { SummaryUI } from "./ui/summary-ui.js";
import { StorageAppManager } from "./localstorage.js";

export const UI = {

    init(){
        FormUI.init();
        this.renderCards(state.tasks);
        this.renderSections();
        this.updateHardResetButtonState();
    },

    updateHardResetButtonState() {
        const $button = $("#hard-reset-button");

        this.setHardResetButtonDisabledState($button);
        this.attachHardResetClickHandler($button);
    },

    setHardResetButtonDisabledState($button) {
        $button.prop("disabled", state.tasks.length === 0);
    },

    attachHardResetClickHandler($button) {
        $button.off("click").on("click", () => this.handleHardResetClick());
    },

    handleHardResetClick() {
        StorageAppManager.clearData();
        $("#card-container").empty();
        state.clearState();
        this.renderSections();
        this.updateHardResetButtonState();
    }
,

    renderCards(taskList) {
        taskList.map(card => CardUI.renderCard(card));
    },

    renderSections() {
        if (state.tasks.length > 0) {
            $("#summary-section").show();
            $("#tasks-section").show();
        } else {
            $("#summary-section").hide();
            $("#tasks-section").hide();
        }
        SummaryUI.renderCounters();
    },
}
