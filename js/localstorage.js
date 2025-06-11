export const StorageAppManager = {
    loadData: function () {
        const completedTasks = localStorage.getItem('completedTasks');
        const pendingTasks = localStorage.getItem('pendingTasks');
        const tasks = localStorage.getItem('tasks');
        const globalIdCounter = localStorage.getItem('globalIdCounter');

        const data = {
            completedTasks: completedTasks ? parseInt(completedTasks, 10) : 0,
            pendingTasks: pendingTasks ? parseInt(completedTasks, 10) : 0,
            tasks: tasks ? JSON.parse(tasks) : [],
            globalIdCounter: globalIdCounter ? parseInt(globalIdCounter, 10) : 0
        }

        return data; 
    },

    saveData: function (data){
        localStorage.setItem('tasks', JSON.stringify(data.tasks));
        localStorage.setItem('completedTasks', JSON.stringify(data.completedTasks));
        localStorage.setItem('pendingTasks', JSON.stringify(data.pendingTasks));
        localStorage.setItem('globalIdCounter', JSON.stringify(data.globalIdCounter));
    }
}