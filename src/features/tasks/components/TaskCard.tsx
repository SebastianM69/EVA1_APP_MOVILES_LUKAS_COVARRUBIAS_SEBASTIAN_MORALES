import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ActionButton } from '@/components/ActionButton';
import type { Task } from '@/features/tasks/model/task';
import { colors, spacing } from '@/theme/tokens';

type TaskCardProps = {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export function TaskCard({ task, onToggle, onEdit, onDelete }: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <Pressable
          accessibilityRole="checkbox"
          accessibilityLabel={`Cambiar ${task.title} a ${task.completed ? 'pendiente' : 'completada'}`}
          accessibilityState={{ checked: task.completed }}
          onPress={onToggle}
          style={({ pressed }) => [styles.toggle, pressed && styles.pressed]}
        >
          <Text style={styles.toggleMark}>{task.completed ? '✓' : '○'}</Text>
        </Pressable>
        <View style={styles.titleGroup}>
          <Text
            style={[styles.title, task.completed && styles.completedTitle]}
            numberOfLines={2}
          >
            {task.title}
          </Text>
          <Text style={styles.status}>
            {task.completed ? 'Completada' : 'Pendiente'}
          </Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={4}>
        {task.description}
      </Text>

      <View style={styles.actions}>
        <ActionButton
          label="Editar"
          variant="secondary"
          accessibilityLabel={`Editar tarea ${task.title}`}
          onPress={onEdit}
        />
        <ActionButton
          label="Eliminar"
          variant="danger"
          accessibilityLabel={`Eliminar tarea ${task.title}`}
          onPress={onDelete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.three,
    padding: spacing.four,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: spacing.two,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.three,
  },
  toggle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  toggleMark: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '700',
  },
  titleGroup: {
    flex: 1,
    gap: spacing.one,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  completedTitle: {
    color: colors.textSecondary,
  },
  status: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.two,
  },
  pressed: {
    opacity: 0.7,
  },
});
