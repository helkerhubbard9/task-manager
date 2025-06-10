window.App = {
    data : {
            completedTasks: 0,
            pendingTasks: 0,
            tasks: [],
            globalIdCounter: 0
    },
    init: function () {
        //todo 
        this.data = window.StorageAppManager.loadData();
      }
}