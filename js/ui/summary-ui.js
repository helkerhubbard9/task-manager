import { data } from "../data.js";

export const Summary = {
    renderCounters(){
        this.renderTotalTasks();
        this.renderCompletedTasks();
        this.renderPendingTasks();
    },

    renderTotalTasks(){
        $("#total-task-counter").text(data.tasks.length);
    },

    renderCompletedTasks(){
        $("#completed-task-counter").text(data.completedTasks);
    },

    renderPendingTasks(){
        $("#pending-task-counter").text(data.pendingTasks);
    }
}