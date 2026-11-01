import { describe, expect, it } from '@jest/globals';

import { validateTaskInput } from './validate-task';

describe('validateTaskInput', () => {
  it('trims both fields and accepts the exact length limits', () => {
    const result = validateTaskInput({
      title: ` ${'t'.repeat(98)} `,
      description: ` ${'d'.repeat(498)} `,
    });

    expect(result).toEqual({
      valid: true,
      value: { title: 't'.repeat(98), description: 'd'.repeat(498) },
    });
  });

  it('rejects whitespace-only values in both required fields', () => {
    const result = validateTaskInput({ title: '   ', description: '\n  ' });

    expect(result).toEqual({
      valid: false,
      errors: {
        title: 'Ingresa un título para la tarea',
        description: 'Ingresa una descripción para la tarea',
      },
    });
  });

  it('rejects title and description beyond their limits', () => {
    const result = validateTaskInput({
      title: 't'.repeat(101),
      description: 'd'.repeat(501),
    });

    expect(result).toEqual({
      valid: false,
      errors: {
        title: 'El título supera el máximo de 100 caracteres',
        description: 'La descripción supera el máximo de 500 caracteres',
      },
    });
  });
});
