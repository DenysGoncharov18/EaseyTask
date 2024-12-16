import { Component, Input,  inject} from '@angular/core';
//import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
//import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  //imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!:Task;

  private tasksSerivce = inject(TasksService)

  onCompleteTask(){
    this.tasksSerivce.removeTask(this.task.id);
  }
}
