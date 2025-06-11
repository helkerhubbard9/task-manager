import { data } from '../data.js';
import {Task} from '../models/tasks.js'
import { CardUI } from './card-ui.js';

export const FormUI = {
    initForm(){
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
            
            const newTask = new Task(data.globalIdCounter++, title, description, priority);

            
            data.tasks.push(newTask);
            data.pendingTasks++;

            console.log(data);
            
            CardUI.renderCard(newTask);
            
            this.resetForm(e);
    },

    editTask(){}
}