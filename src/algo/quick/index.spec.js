import { describe, it, expect } from 'bun:test';

import { sort } from './index';

describe('Quick Sort', () => {
  it('Sorts array', () => {
    const arr = [9, 12, 1, 99, 100, 7, 2, 3];
    expect(sort(arr)).toEqual([1, 2, 3, 7, 9, 12, 99, 100]);
  });
});
