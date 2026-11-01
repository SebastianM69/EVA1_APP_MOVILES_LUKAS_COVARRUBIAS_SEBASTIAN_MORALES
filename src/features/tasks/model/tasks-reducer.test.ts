import { describe, expect, it } from '@jest/globals';

import type { Task } from './task';
import {
  initialTasksState,
  tasksReducer,
  type TasksState,
} from './tasks-reducer';

const task = (id: string, completed = false): Task => ({
  id,
  title: `Tarea ${id}`,
  description: `Descripción ${id}`,
  completed,
});

const stateWith = (...tasks: Task[]): TasksState => ({ tasks });

describe('tasksReducer', () => {
  it('creates one normalized pending task and ignores duplicate identifiers', () => {
    const created = tasksReducer(initialTasksState, {
      type: 'create',
      task: {
        id: 'a',
        title: '  Leer  ',
        description: '  Requisitos  ',
        completed: true,
      },
    });

    expect(created.tasks).toEqual([
      { id: 'a', title: 'Leer', description: 'Requisitos', completed: false },
    ]);
    expect(
      tasksReducer(created, {
        type: 'create',
        task: {
          id: 'a',
          title: 'Otro',
          description: 'Texto',
          completed: false,
        },
      }),
    ).toBe(created);
  });

  it('edits only the selected task and preserves its id and completion state', () => {
    const original = stateWith(task('a', true), task('b'));
    const updated = tasksReducer(original, {
      type: 'update',
      id: 'a',
      input: { title: '  Nuevo título ', description: ' Nueva descripción  ' },
    });

    expect(updated.tasks).toEqual([
      {
        id: 'a',
        title: 'Nuevo título',
        description: 'Nueva descripción',
        completed: true,
      },
      task('b'),
    ]);
    expect(original.tasks).toEqual([task('a', true), task('b')]);
  });

  it('does not mutate state for invalid edits or missing identifiers', () => {
    const original = stateWith(task('a'));

    expect(
      tasksReducer(original, {
        type: 'update',
        id: 'a',
        input: { title: ' ', description: 'Descripción' },
      }),
    ).toBe(original);
    expect(tasksReducer(original, { type: 'remove', id: 'missing' })).toBe(
      original,
    );
  });

  it('toggles either direction and removes only the requested task', () => {
    const original = stateWith(task('a'), task('b', true));
    const completed = tasksReducer(original, { type: 'toggle', id: 'a' });
    const reopened = tasksReducer(completed, { type: 'toggle', id: 'b' });
    const removed = tasksReducer(reopened, { type: 'remove', id: 'a' });

    expect(completed.tasks[0]?.completed).toBe(true);
    expect(reopened.tasks[1]?.completed).toBe(false);
    expect(removed.tasks).toEqual([task('b')]);
  });

  it('rejects invalid task creation', () => {
    const result = tasksReducer(initialTasksState, {
      type: 'create',
      task: {
        id: 'invalid',
        title: 'Título',
        description: ' '.repeat(501),
        completed: false,
      },
    });

    expect(result).toBe(initialTasksState);
  });
});
