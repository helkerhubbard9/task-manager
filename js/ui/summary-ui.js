import { state } from "../state.js";

export const SummaryUI = {
    renderCounters(){
        this.renderTotalTasks();
        this.renderCompletedTasks();
        this.renderPendingTasks();
    },

    renderTotalTasks(){
        $("#total-task-counter").text(state.tasks.length);
    },

    renderCompletedTasks(){
        $("#completed-task-counter").text(state.completedTasks);
    },

    renderPendingTasks(){
        $("#pending-task-counter").text(state.pendingTasks);
    }
}