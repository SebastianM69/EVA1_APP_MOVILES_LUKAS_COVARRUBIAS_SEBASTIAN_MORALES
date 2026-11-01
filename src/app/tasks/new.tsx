import { useCallback } from 'react';
import { useRouter } from 'expo-router';

import { TaskForm } from '@/features/tasks/components/TaskForm';
import type { TaskInput } from '@/features/tasks/model/task';
import { useTasks } from '@/features/tasks/context/tasks-context';

export default function NewTaskScreen() {
  const router = useRouter();
  const { addTask } = useTasks();
  const cancel = useCallback(() => router.back(), [router]);
  const save = useCallback(
    (input: TaskInput) => {
      const saved = addTask(input);
      if (saved) router.back();
      return saved;
    },
    [addTask, router],
  );

  return (
    <TaskForm
      heading="Nueva tarea"
      submitLabel="Guardar tarea"
      onSave={save}
      onCancel={cancel}
    />
  );
}
