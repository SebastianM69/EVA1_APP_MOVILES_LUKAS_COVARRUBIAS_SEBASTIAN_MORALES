import type { Task, TaskFilter } from './task';

export function filterTasks(tasks: Task[], filter: TaskFilter): Task[] {
  if (filter === 'pending') return tasks.filter((task) => !task.completed);
  if (filter === 'completed') return tasks.filter((task) => task.completed);
  return tasks;
}

export function countPendingTasks(tasks: Task[]): number {
  return tasks.reduce((count, task) => count + (task.completed ? 0 : 1), 0);
}
