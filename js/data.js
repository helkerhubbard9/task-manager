import { Task } from "./models/tasks.js";

export const data = {
        completedTasks: 0,
        pendingTasks: 0,
        tasks: [],
        globalIdCounter: 0,

        getTaskById(taskId){
                return this.tasks.find(task => task.id === taskId);
        },

        createTask(title, description, priority) {
                const newTask = new Task(data.globalIdCounter++, title, description, priority);
                data.tasks.push(newTask);
                data.pendingTasks++;

                return newTask;
        },

        removeTask(taskId){
                const task = this.getTaskById(taskId);
                const index = this.tasks.indexOf(task); 
                if (index !== -1) {
                      this.tasks.splice(index, 1);
                      if (!task.completed) this.pendingTasks--;
                        else this.completedTasks--;
                }
        },

        editTask(){
        
        },
};