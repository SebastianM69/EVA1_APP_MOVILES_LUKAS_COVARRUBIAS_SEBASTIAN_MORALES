import { describe, expect, it, jest } from '@jest/globals';
import { Alert } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { TaskForm } from './TaskForm';
import type { TaskInput } from '@/features/tasks/model/task';

describe('TaskForm', () => {
  it('shows field errors, preserves input, and submits trimmed values', async () => {
    const onSave = jest.fn((_input: TaskInput) => true);
    const onCancel = jest.fn();
    await render(
      <TaskForm
        heading="Nueva tarea"
        submitLabel="Guardar tarea"
        onSave={onSave}
        onCancel={onCancel}
      />,
    );

    await fireEvent.press(
      screen.getByRole('button', { name: 'Guardar tarea' }),
    );
    expect(screen.getByText('Ingresa un título para la tarea')).toBeTruthy();
    expect(
      screen.getByText('Ingresa una descripción para la tarea'),
    ).toBeTruthy();
    expect(onSave).not.toHaveBeenCalled();

    await fireEvent.changeText(
      screen.getByLabelText('Título'),
      '  Revisar rúbrica  ',
    );
    await fireEvent.changeText(
      screen.getByLabelText('Descripción'),
      '  Leer los criterios  ',
    );
    await fireEvent.press(
      screen.getByRole('button', { name: 'Guardar tarea' }),
    );

    expect(onSave).toHaveBeenCalledWith({
      title: 'Revisar rúbrica',
      description: 'Leer los criterios',
    });
  });

  it('asks before discarding a modified draft but not an unchanged draft', async () => {
    const alert = jest.spyOn(Alert, 'alert');
    const onCancel = jest.fn();
    const { rerender } = await render(
      <TaskForm
        heading="Editar tarea"
        submitLabel="Guardar cambios"
        initialValues={{ title: 'Título', description: 'Descripción' }}
        onSave={() => true}
        onCancel={onCancel}
      />,
    );

    await fireEvent.press(screen.getByRole('button', { name: 'Cancelar' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(alert).not.toHaveBeenCalled();

    onCancel.mockClear();
    await rerender(
      <TaskForm
        heading="Editar tarea"
        submitLabel="Guardar cambios"
        initialValues={{ title: 'Título', description: 'Descripción' }}
        onSave={() => true}
        onCancel={onCancel}
      />,
    );
    await fireEvent.changeText(
      screen.getByLabelText('Título'),
      'Título editado',
    );
    await fireEvent.press(screen.getByRole('button', { name: 'Cancelar' }));

    expect(alert).toHaveBeenCalledWith(
      'Descartar cambios',
      'Tienes cambios sin guardar. ¿Quieres descartarlos?',
      expect.arrayContaining([
        expect.objectContaining({ text: 'Seguir editando', style: 'cancel' }),
        expect.objectContaining({
          text: 'Descartar cambios',
          style: 'destructive',
        }),
      ]),
    );
    const lastCall = alert.mock.calls[alert.mock.calls.length - 1];
    const buttons = lastCall?.[2];
    buttons?.find((button) => button.text === 'Descartar cambios')?.onPress?.();
    expect(onCancel).toHaveBeenCalledTimes(1);
    alert.mockRestore();
  });
});
