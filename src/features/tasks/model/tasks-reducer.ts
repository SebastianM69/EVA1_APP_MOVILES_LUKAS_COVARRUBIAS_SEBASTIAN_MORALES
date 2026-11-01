import type { Task, TaskInput } from './task';
import { validateTaskInput } from '../validation/validate-task';

export type TasksState = {
  tasks: Task[];
};

export type TasksAction =
  | { type: 'create'; task: Task }
  | { type: 'update'; id: string; input: TaskInput }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string };

export const initialTasksState: TasksState = { tasks: [] };

export function tasksReducer(
  state: TasksState,
  action: TasksAction,
): TasksState {
  switch (action.type) {
    case 'create': {
      if (state.tasks.some((task) => task.id === action.task.id)) return state;

      const validation = validateTaskInput(action.task);
      if (!validation.valid) return state;

      const task: Task = {
        id: action.task.id,
        ...validation.value,
        completed: false,
      };
      return { tasks: [...state.tasks, task] };
    }
    case 'update': {
      if (!state.tasks.some((task) => task.id === action.id)) return state;

      const validation = validateTaskInput(action.input);
      if (!validation.valid) return state;

      return {
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, ...validation.value } : task,
        ),
      };
    }
    case 'toggle': {
      if (!state.tasks.some((task) => task.id === action.id)) return state;

      return {
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    }
    case 'remove': {
      if (!state.tasks.some((task) => task.id === action.id)) return state;
      return { tasks: state.tasks.filter((task) => task.id !== action.id) };
    }
  }
}
