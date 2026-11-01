import { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ActionButton } from '@/components/ActionButton';
import { colors, spacing } from '@/theme/tokens';
import {
  TASK_DESCRIPTION_MAX_LENGTH,
  TASK_TITLE_MAX_LENGTH,
  type TaskInput,
} from '../model/task';
import {
  validateTaskInput,
  type TaskErrors,
} from '../validation/validate-task';

type TaskFormProps = {
  heading: string;
  submitLabel: string;
  initialValues?: TaskInput;
  onSave: (input: TaskInput) => boolean;
  onCancel: () => void;
};

export function TaskForm({
  heading,
  submitLabel,
  initialValues,
  onSave,
  onCancel,
}: TaskFormProps) {
  const [title, setTitle] = useState(initialValues?.title ?? '');
  const [description, setDescription] = useState(
    initialValues?.description ?? '',
  );
  const [errors, setErrors] = useState<TaskErrors>({});
  const initialTitle = initialValues?.title ?? '';
  const initialDescription = initialValues?.description ?? '';
  const isDirty = title !== initialTitle || description !== initialDescription;

  const requestCancel = useCallback(() => {
    if (!isDirty) {
      onCancel();
      return;
    }

    Alert.alert(
      'Descartar cambios',
      'Tienes cambios sin guardar. ¿Quieres descartarlos?',
      [
        { text: 'Seguir editando', style: 'cancel' },
        { text: 'Descartar cambios', style: 'destructive', onPress: onCancel },
      ],
    );
  }, [isDirty, onCancel]);

  useEffect(() => {
    if (!isDirty) return;

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        requestCancel();
        return true;
      },
    );
    return () => subscription.remove();
  }, [isDirty, requestCancel]);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (errors.title) {
      const validation = validateTaskInput({ title: value, description });
      setErrors((current) => ({
        ...current,
        title: validation.valid ? undefined : validation.errors.title,
      }));
    }
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    if (errors.description) {
      const validation = validateTaskInput({ title, description: value });
      setErrors((current) => ({
        ...current,
        description: validation.valid
          ? undefined
          : validation.errors.description,
      }));
    }
  };

  const handleSave = () => {
    const validation = validateTaskInput({ title, description });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    Keyboard.dismiss();
    if (onSave(validation.value)) setErrors({});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <ActionButton
            label="Volver"
            variant="secondary"
            accessibilityLabel="Volver a mis tareas"
            onPress={requestCancel}
          />

          <View style={styles.headingGroup}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.supportingText}>
              Las tareas se conservan mientras esta sesión esté abierta.
            </Text>
          </View>

          <View style={styles.fieldGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Título</Text>
              <Text style={styles.counter}>
                {title.length}/{TASK_TITLE_MAX_LENGTH}
              </Text>
            </View>
            <TextInput
              accessibilityLabel="Título"
              accessibilityHint="Obligatorio, máximo 100 caracteres"
              value={title}
              onChangeText={handleTitleChange}
              maxLength={TASK_TITLE_MAX_LENGTH}
              autoCapitalize="sentences"
              returnKeyType="next"
              style={[styles.input, errors.title && styles.inputError]}
            />
            {errors.title ? (
              <Text accessibilityLiveRegion="polite" style={styles.error}>
                {errors.title}
              </Text>
            ) : null}
          </View>

          <View style={styles.fieldGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Descripción</Text>
              <Text style={styles.counter}>
                {description.length}/{TASK_DESCRIPTION_MAX_LENGTH}
              </Text>
            </View>
            <TextInput
              accessibilityLabel="Descripción"
              accessibilityHint="Obligatoria, máximo 500 caracteres"
              value={description}
              onChangeText={handleDescriptionChange}
              maxLength={TASK_DESCRIPTION_MAX_LENGTH}
              multiline
              textAlignVertical="top"
              style={[
                styles.input,
                styles.descriptionInput,
                errors.description && styles.inputError,
              ]}
            />
            {errors.description ? (
              <Text accessibilityLiveRegion="polite" style={styles.error}>
                {errors.description}
              </Text>
            ) : null}
          </View>

          <View style={styles.actions}>
            <ActionButton label={submitLabel} onPress={handleSave} />
            <ActionButton
              label="Cancelar"
              variant="secondary"
              onPress={requestCancel}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: {
    flexGrow: 1,
    gap: spacing.six,
    padding: spacing.four,
  },
  headingGroup: { gap: spacing.two },
  heading: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
  },
  supportingText: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 22,
  },
  fieldGroup: { gap: spacing.two },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  input: {
    minHeight: 52,
    paddingHorizontal: spacing.three,
    paddingVertical: spacing.two,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: spacing.two,
    fontSize: 16,
  },
  descriptionInput: {
    minHeight: 144,
  },
  inputError: { borderColor: colors.danger },
  error: {
    color: colors.danger,
    fontSize: 14,
  },
  actions: {
    gap: spacing.two,
    paddingBottom: spacing.four,
  },
});
