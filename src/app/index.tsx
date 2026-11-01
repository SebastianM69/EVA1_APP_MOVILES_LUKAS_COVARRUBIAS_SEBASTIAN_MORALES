import { useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { ActionButton } from '@/components/ActionButton';
import { TaskCard } from '@/features/tasks/components/TaskCard';
import type { TaskFilter } from '@/features/tasks/model/task';
import {
  countPendingTasks,
  filterTasks,
} from '@/features/tasks/model/task-selectors';
import { useTasks } from '@/features/tasks/context/tasks-context';
import { colors, spacing } from '@/theme/tokens';

const filters: { value: TaskFilter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
];

export default function TaskListScreen() {
  const router = useRouter();
  const { tasks, announcement, toggleTask, removeTask } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>('all');
  const pendingCount = countPendingTasks(tasks);

  const visibleTasks = useMemo(
    () => filterTasks(tasks, filter),
    [filter, tasks],
  );

  const confirmDelete = (id: string, title: string) => {
    Alert.alert(`¿Eliminar “${title}”?`, 'Esta acción no se puede deshacer.', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => removeTask(id) },
    ]);
  };

  const emptyTitle =
    tasks.length === 0
      ? 'Aún no tienes tareas'
      : filter === 'pending'
        ? 'No tienes tareas pendientes'
        : 'No tienes tareas completadas';
  const emptyDescription =
    tasks.length === 0
      ? 'Crea tu primera tarea para comenzar.'
      : 'Puedes cambiar el filtro para ver las demás tareas.';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Mis tareas</Text>
          <Text style={styles.subtitle}>
            {pendingCount === 0
              ? 'No tienes tareas pendientes'
              : `${pendingCount} ${pendingCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}`}
          </Text>
        </View>

        <View style={styles.filters} accessibilityRole="tablist">
          {filters.map((item) => {
            const selected = filter === item.value;
            return (
              <Pressable
                key={item.value}
                accessibilityRole="button"
                accessibilityLabel={`Ver tareas: ${item.label}`}
                accessibilityState={{ selected }}
                onPress={() => setFilter(item.value)}
                style={({ pressed }) => [
                  styles.filterButton,
                  selected && styles.filterSelected,
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.filterLabel,
                    selected && styles.filterLabelSelected,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {announcement ? (
          <View accessibilityLiveRegion="polite" style={styles.announcement}>
            <Text style={styles.announcementText}>{announcement}</Text>
          </View>
        ) : null}

        {visibleTasks.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>{emptyTitle}</Text>
            <Text style={styles.emptyDescription}>{emptyDescription}</Text>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={visibleTasks}
            keyExtractor={(task) => task.id}
            renderItem={({ item }) => (
              <TaskCard
                task={item}
                onToggle={() => toggleTask(item.id)}
                onEdit={() =>
                  router.push({
                    pathname: '/tasks/[id]/edit',
                    params: { id: item.id },
                  })
                }
                onDelete={() => confirmDelete(item.id, item.title)}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}

        <ActionButton
          label="Nueva tarea"
          onPress={() => router.push('/tasks/new')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: {
    flex: 1,
    gap: spacing.four,
    paddingHorizontal: spacing.four,
    paddingTop: spacing.four,
    paddingBottom: spacing.two,
  },
  header: { gap: spacing.one },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  filters: {
    flexDirection: 'row',
    gap: spacing.two,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: spacing.two,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.two,
    backgroundColor: colors.surface,
  },
  filterSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  filterLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  filterLabelSelected: { color: colors.white },
  pressed: { opacity: 0.75 },
  announcement: {
    padding: spacing.three,
    borderRadius: spacing.two,
    backgroundColor: colors.success,
  },
  announcementText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  list: { flex: 1 },
  listContent: { paddingBottom: spacing.two },
  separator: { height: spacing.three },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.two,
    paddingHorizontal: spacing.four,
  },
  emptyTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyDescription: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});
