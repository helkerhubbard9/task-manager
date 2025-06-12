import { StorageAppManager } from "./localstorage.js";
import { Task } from "./models/tasks.js";

export const state = {
        completedTasks: 0,
        pendingTasks: 0,
        tasks: [],
        globalIdCounter: 0,

        getTaskById(taskId){
                return this.tasks.find(task => task.id === taskId);
        },

        createTask(title, description, priority) {
                const newTask = new Task(state.globalIdCounter++, title, description, priority);
                state.tasks.push(newTask);
                state.pendingTasks++;
                StorageAppManager.saveData(this);
                return newTask;
        },

        removeTask(taskId){
                const task = this.getTaskById(taskId);
                const index = this.tasks.indexOf(task); 
                if (index !== -1) {
                      this.tasks.splice(index, 1);
                      if (!task.completed) this.pendingTasks--;
                        else this.completedTasks--;
                      if(this.tasks.length === 0){
                        this.globalIdCounter = 0;  
                      }
                }
                StorageAppManager.saveData(this);
        },

        changeTaskStatus(taskId, isCompleted){
                const task = this.getTaskById(taskId);
                task.completed = isCompleted;
                if(isCompleted){
                        this.completedTasks++;
                        this.pendingTasks--;
                } else {
                        this.completedTasks--;
                        this.pendingTasks++;
                }
                StorageAppManager.saveData(this);
        },

        clearState(){
                this.completedTasks =  0;
                this.pendingTasks = 0;
                this.tasks.splice(0, state.tasks.length);
                this.globalIdCounter = 0;
        }
};