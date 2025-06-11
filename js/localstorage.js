export const StorageAppManager = {
    loadData: function (data) {
        const completedTasks = localStorage.getItem('completedTasks');
        const pendingTasks = localStorage.getItem('pendingTasks');
        const tasks = localStorage.getItem('tasks');
        const globalIdCounter = localStorage.getItem('globalIdCounter');

    
        data.completedTasks = completedTasks ? parseInt(completedTasks, 10) : 0,
        data.pendingTasks = pendingTasks ? parseInt(pendingTasks, 10) : 0,
        data.tasks = tasks ? JSON.parse(tasks) : [],
        data.globalIdCounter = globalIdCounter ? parseInt(globalIdCounter, 10) : 0
    },

    saveData: function (data){
        localStorage.setItem('tasks', JSON.stringify(data.tasks));
        localStorage.setItem('completedTasks', JSON.stringify(data.completedTasks));
        localStorage.setItem('pendingTasks', JSON.stringify(data.pendingTasks));
        localStorage.setItem('globalIdCounter', JSON.stringify(data.globalIdCounter));
    },

    clearData: function (){
        const completedTasks = localStorage.removeItem('completedTasks');
        const pendingTasks = localStorage.removeItem('pendingTasks');
        const tasks = localStorage.removeItem('tasks');
        const globalIdCounter = localStorage.removeItem('globalIdCounter');
    }
}