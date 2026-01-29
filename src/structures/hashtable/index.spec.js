import { describe, beforeEach, afterEach, it, expect } from 'bun:test';

import { HashTable } from './index';

describe('HashTable', () => {
  let table;
  beforeEach(() => {
    table = new HashTable();
  });
  afterEach(() => {
    table = null;
  });

  it('set values to hash table', () => {
    table.set('sasha', 99);
    table.set('marina', 100);
    table.set('misha', 101);
    table.set('andriy', 102);
    table.set('sasha', 103);
    expect(table.get('sasha')).toBe(99);
    expect(table.get('marina')).toBe(100);
    expect(table.get('misha')).toBe(101);
    expect(table.get('andriy')).toBe(102);
  });
  it('returns all keys in table', () => {
    table.set('sasha', 99);
    table.set('marina', 100);
    table.set('misha', 101);
    table.set('andriy', 102);
    table.set('sasha', 103);
    expect(table.keys()).toEqual(
      ['misha', 'marina', 'sasha', 'andriy', 'sasha']
    );
  });
});
