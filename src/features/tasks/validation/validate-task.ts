import {
  TASK_DESCRIPTION_MAX_LENGTH,
  TASK_TITLE_MAX_LENGTH,
  type TaskInput,
} from '../model/task';

export type TaskErrors = Partial<Record<keyof TaskInput, string>>;

export type TaskValidation =
  { valid: true; value: TaskInput } | { valid: false; errors: TaskErrors };

export function validateTaskInput(input: TaskInput): TaskValidation {
  const title = input.title.trim();
  const description = input.description.trim();
  const errors: TaskErrors = {};

  if (input.title.length > TASK_TITLE_MAX_LENGTH) {
    errors.title = 'El título supera el máximo de 100 caracteres';
  } else if (title.length === 0) {
    errors.title = 'Ingresa un título para la tarea';
  }

  if (input.description.length > TASK_DESCRIPTION_MAX_LENGTH) {
    errors.description = 'La descripción supera el máximo de 500 caracteres';
  } else if (description.length === 0) {
    errors.description = 'Ingresa una descripción para la tarea';
  }

  if (errors.title || errors.description) {
    return { valid: false, errors };
  }

  return { valid: true, value: { title, description } };
}
