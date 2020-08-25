import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './dto/task.dto';
import { CreateTask } from './dto/createTask.dto';
import {
  ApiTags,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @ApiNotFoundResponse({ description: 'No task found for ID' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Get(':id')
  getTask(@Param('id') taskId: string): Task {
    return this.taskService.getTask(taskId);
  }

  @ApiBadRequestResponse({ description: 'Bad request' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @Post()
  createTask(@Body() createTask: CreateTask): Task {
    return this.taskService.createTask(createTask);
  }
}
