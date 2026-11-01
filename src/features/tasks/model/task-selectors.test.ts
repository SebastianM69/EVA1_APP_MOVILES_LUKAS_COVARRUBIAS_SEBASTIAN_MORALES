import { describe, expect, it } from '@jest/globals';

import type { Task } from './task';
import { countPendingTasks, filterTasks } from './task-selectors';

const tasks: Task[] = [
  { id: 'a', title: 'Pendiente A', description: 'A', completed: false },
  { id: 'b', title: 'Completada B', description: 'B', completed: true },
  { id: 'c', title: 'Pendiente C', description: 'C', completed: false },
];

describe('task selectors', () => {
  it('filters each status without changing the source collection', () => {
    expect(filterTasks(tasks, 'all')).toEqual(tasks);
    expect(filterTasks(tasks, 'pending').map((task) => task.id)).toEqual([
      'a',
      'c',
    ]);
    expect(filterTasks(tasks, 'completed').map((task) => task.id)).toEqual([
      'b',
    ]);
    expect(tasks).toHaveLength(3);
  });

  it('counts pending tasks and returns zero for an empty collection', () => {
    expect(countPendingTasks(tasks)).toBe(2);
    expect(countPendingTasks([])).toBe(0);
  });
});
