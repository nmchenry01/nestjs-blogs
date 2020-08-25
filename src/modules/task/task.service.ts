import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './dto/task.dto';
import { CreateTask } from './dto/createTask.dto';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  createTask(createTask: CreateTask): Task {
    const { title, description } = createTask;

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      dateTimeCreated: moment().format(),
    };

    this.tasks.push(newTask);

    return newTask;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(taskId: string): Task {
    const task = this.tasks.find(task => task.id === taskId);

    if (!task) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }

    return task;
  }
}
