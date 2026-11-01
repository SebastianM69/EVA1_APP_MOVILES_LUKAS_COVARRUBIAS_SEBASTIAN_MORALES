export const TASK_TITLE_MAX_LENGTH = 100;
export const TASK_DESCRIPTION_MAX_LENGTH = 500;

export type TaskInput = {
  title: string;
  description: string;
};

export type Task = TaskInput & {
  id: string;
  completed: boolean;
};

export type TaskFilter = 'all' | 'pending' | 'completed';

let taskSequence = 0;

export function createTaskId(): string {
  taskSequence += 1;
  return `${Date.now().toString(36)}-${taskSequence.toString(36)}`;
}
