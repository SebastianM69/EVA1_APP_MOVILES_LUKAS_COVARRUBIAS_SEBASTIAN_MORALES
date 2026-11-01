import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '@/components/ActionButton';
import { TaskForm } from '@/features/tasks/components/TaskForm';
import type { TaskInput } from '@/features/tasks/model/task';
import { useTasks } from '@/features/tasks/context/tasks-context';
import { colors, spacing } from '@/theme/tokens';

export default function EditTaskScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tasks, updateTask } = useTasks();
  const taskId = Array.isArray(id) ? id[0] : id;
  const task = tasks.find((item) => item.id === taskId);
  const cancel = useCallback(() => router.back(), [router]);
  const save = useCallback(
    (input: TaskInput) => {
      if (!taskId) return false;
      const saved = updateTask(taskId, input);
      if (saved) router.back();
      return saved;
    },
    [router, taskId, updateTask],
  );

  if (!task) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.missing}>
          <Text style={styles.title}>No encontramos esta tarea</Text>
          <ActionButton label="Volver a mis tareas" onPress={cancel} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <TaskForm
      key={task.id}
      heading="Editar tarea"
      submitLabel="Guardar cambios"
      initialValues={{ title: task.title, description: task.description }}
      onSave={save}
      onCancel={cancel}
    />
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.four,
    padding: spacing.four,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});
