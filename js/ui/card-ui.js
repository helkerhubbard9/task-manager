import { data } from "../data.js";
import { FormUI } from "./form-ui.js";

export const CardUI = {
    renderCard(task) {
        const $template = $($("#card-template").html());
        const cardId = `card-${task.id}`;

        $template.attr('data-id', cardId);
        $template.find('.card__title').text(task.title);
        $template.find('.card__description').text(task.description);

        let formatedPriority = "";

        switch(task.priority){
            case "low":
                formatedPriority = "Baja";
                break;
            case "mid":
                formatedPriority = "media";
                break;
            case "high":
                formatedPriority = "Alta";
                break;
        }

        $template.find('.card__priority').text(formatedPriority);
        $template.find('.card__status').text(task.status);
        $template.find('.card__checkbox').prop('checked', task.completed);

        $template.find('.card__edit').on('click', () => {
            this.editCard(task.id);
        });

        $template.find('.card__delete').on('click', () => {
            this.deleteCard(task.id);
        });

        $template.find('.card__checkbox').on('change', (e) => {
            this.toggleCompletion(task.id, e.target.checked);
        });

        $("#card-container").append($template);
    },

    getCardById(cardId) {
        return $(`.card[data-id="card-${cardId}"]`);
    },

    editCard(cardId) {
        const $card = this.getCardById(cardId);
        // TODO: Abrir formulario de edición

        const task = data.tasks.find(card => card.id === cardId);

        const $form = $("html").find(".form");

        $form.find("#title-input").val(task.title).trigger("input");
        $form.find("#description-textarea").val(task.description).trigger("input");
        $form.find("#priority-select").val(task.priority);

        $form.find("#save-button").off("click").one("click", function (e){
            e.preventDefault();
            
            task.title = $form.find("#title-input").val();
            task.description = $form.find("#description-textarea").val();
            task.priority = $form.find("#priority-select").val();

            let formatedPriority = "";

            switch(task.priority){
                case "low":
                    formatedPriority = "Baja";
                    break;
                case "mid":
                    formatedPriority = "media";
                    break;
                case "high":
                    formatedPriority = "Alta";
                    break;
            }

            $card.find('.card__title').text(task.title);
            $card.find('.card__description').text(task.description);
            $card.find('.card__priority').text(formatedPriority);

            FormUI.addSaveTaskEvent();
            FormUI.resetForm(e);
        });
    },

    deleteCard(cardId) {
        this.getCardById(cardId).remove();
    },

    toggleCompletion(cardId, isCompleted) {
        const $card = this.getCardById(cardId);
        $card.find('.card__status').text(isCompleted ? 'Completado' : 'Pendiente');
    }
};