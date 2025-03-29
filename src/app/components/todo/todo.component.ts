import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-todo',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: { name: string; completed: boolean; isEditing: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false, isEditing:false });
      this.newTask = '';
    }
  }

  editTask(task: { name: string; completed: boolean; isEditing: boolean }) {
    task.isEditing = true;
  }
  
  saveTask(task: { name: string; completed: boolean; isEditing: boolean }) {
    task.isEditing = false;
  }
  
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
