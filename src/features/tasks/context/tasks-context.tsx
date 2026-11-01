import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import { createTaskId, type Task, type TaskInput } from '../model/task';
import { initialTasksState, tasksReducer } from '../model/tasks-reducer';
import { validateTaskInput } from '../validation/validate-task';

const ANNOUNCEMENT_DURATION_MS = 2500;

type TasksContextValue = {
  tasks: Task[];
  announcement: string | null;
  addTask: (input: TaskInput) => boolean;
  updateTask: (id: string, input: TaskInput) => boolean;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
};

const TasksContext = createContext<TasksContextValue | null>(null);

export function TasksProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(tasksReducer, initialTasksState);
  const [announcement, setAnnouncement] = useState<string | null>(null);
  const announcementTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const announce = useCallback((message: string) => {
    if (announcementTimer.current !== null) {
      clearTimeout(announcementTimer.current);
      announcementTimer.current = null;
    }
    setAnnouncement(message);
    announcementTimer.current = setTimeout(() => {
      setAnnouncement(null);
      announcementTimer.current = null;
    }, ANNOUNCEMENT_DURATION_MS);
  }, []);

  useEffect(
    () => () => {
      if (announcementTimer.current !== null) {
        clearTimeout(announcementTimer.current);
        announcementTimer.current = null;
      }
    },
    [],
  );

  const addTask = useCallback(
    (input: TaskInput) => {
      const validation = validateTaskInput(input);
      if (!validation.valid) return false;

      dispatch({
        type: 'create',
        task: { id: createTaskId(), ...validation.value, completed: false },
      });
      announce('Tarea agregada');
      return true;
    },
    [announce],
  );

  const updateTask = useCallback(
    (id: string, input: TaskInput) => {
      if (!state.tasks.some((task) => task.id === id)) return false;
      const validation = validateTaskInput(input);
      if (!validation.valid) return false;

      dispatch({ type: 'update', id, input: validation.value });
      announce('Cambios guardados');
      return true;
    },
    [announce, state.tasks],
  );

  const toggleTask = useCallback(
    (id: string) => {
      const task = state.tasks.find((item) => item.id === id);
      if (!task) return;

      dispatch({ type: 'toggle', id });
      announce(
        task.completed ? 'Tarea marcada como pendiente' : 'Tarea completada',
      );
    },
    [announce, state.tasks],
  );

  const removeTask = useCallback(
    (id: string) => {
      if (!state.tasks.some((task) => task.id === id)) return;
      dispatch({ type: 'remove', id });
      announce('Tarea eliminada');
    },
    [announce, state.tasks],
  );

  const value = useMemo(
    () => ({
      tasks: state.tasks,
      announcement,
      addTask,
      updateTask,
      toggleTask,
      removeTask,
    }),
    [state.tasks, announcement, addTask, updateTask, toggleTask, removeTask],
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}

export function useTasks(): TasksContextValue {
  const context = useContext(TasksContext);
  if (context === null) {
    throw new Error('useTasks debe usarse dentro de TasksProvider');
  }
  return context;
}
