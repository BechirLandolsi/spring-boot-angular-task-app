import {Component, OnInit} from '@angular/core';
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
    tasks: Task[] = [];

    constructor() {
    }

    ngOnInit() {
        this.tasks.push(new Task(1, "Task 1", true, "15/01/2019"));
        this.tasks.push(new Task(1, "Task 2", false, "18/01/2019"));
        this.tasks.push(new Task(1, "Task 3", false, "23/01/2019"));
    }

    getDueDateLabel(task: Task){
        return  task.completed ? "label-success" : "label-primary";
    }

    onTaskChange(event, task){
        console.log("Task has change");
        // this.taskService.save(task, event.target.checked).subscribe();
    }
}
