export class Task {
    id = 0;
    title = "";
    description = "";
    status = "";
    completed = "";

    constructor(id, title, description, priority){
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = "Pendiente";
        this.completed = false;
    }
    
    editCard(title, description, priority, status, completed){
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.completed = completed;
    }
}
