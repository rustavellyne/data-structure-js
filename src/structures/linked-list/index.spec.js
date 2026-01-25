import { expect, test, describe, beforeEach, afterEach, } from 'bun:test';
import { LinkedList } from './index.js';


describe('Linked List', () => {
  let list = null
  beforeEach(() => {
    list = new LinkedList();
  });
  afterEach(() => {
    list = null;
  })

  test("Should have size 0 on create with no arguments in constructor", () => {
    expect(list.length).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });

  test('After adding number to constructor should push it to end', () => {
    const list = new LinkedList(5);

    expect(list.length).toBe(1);
    expect(list.isEmpty()).toBe(false)
    expect(list.get(0)).toBe(5);
  });
  test('out of range index', () => {
    list.push(5)
    expect(() => list.get(-1)).toThrowError();
    expect(() => list.get(20)).toThrowError();
    expect(() => list.get(1)).toThrowError();
  });
  test('push() appends value and preserves order', () => {
    list.push(5).push(6).push(7);
    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(5);
    expect(list.get(1)).toBe(6);
    expect(list.get(2)).toBe(7);
  });
})

