import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TasksStatus } from '../task-status';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TasksStatus)
  status?: TasksStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
