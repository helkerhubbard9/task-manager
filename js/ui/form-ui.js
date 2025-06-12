import { state } from '../state.js';
import { UI } from '../ui.js';
import { CardUI } from './card-ui.js';

export const FormUI = {
    init(){
        this.addDisableSaveButtonEvent();
        this.addResetFormEvent();
        this.addSaveTaskEvent();
    },

    addDisableSaveButtonEvent(){
        const $inputs = $("#title-input, #description-textarea");
        $inputs.on("input", this.disableSaveButtonEvent);
        $inputs.on("change", this.disableSaveButtonEvent);
    },

    disableSaveButtonEvent() {
        const title = $('#title-input').val().trim();
        const description = $("#description-textarea").val().trim();

        const $saveButton = $(".form__actions").find("#save-button");
        $saveButton.prop('disabled', title === '' || description === '');
    },

    addResetFormEvent (){
        const $resetButton = $($(".form__actions").find("#reset-button"));
        $resetButton.on("click", this.resetForm)
    },

    resetForm(e){
        e.preventDefault();
        const $form = $("html").find(".form");

        $form.find("#title-input").val("").trigger("input");
        $form.find("#description-textarea").val("").trigger("input");
        $form.find("#priority-select").val("low");
    },

    addSaveTaskEvent(){
        const $saveButton = $($(".form__actions").find("#save-button"));
        $saveButton.off("click").on("click", this.saveTask.bind(this));
    },

    saveTask(e) {
            e.preventDefault();
            const $form = $("html").find(".form");

            const title = $form.find("#title-input").val();
            const description = $form.find("#description-textarea").val();
            const priority = $form.find("#priority-select").val();
            
            const newTask = state.createTask(title, description, priority);
            
            CardUI.renderCard(newTask);
            UI.renderSections();
            this.resetForm(e);
    }
}