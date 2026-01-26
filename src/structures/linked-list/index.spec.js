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
  test('pop() throws when list is empty', () => {
    expect(() => list.pop()).toThrowError();
  });
  test('pop() removes the only element make list empty and returns value', () => {
    list.push(1);
    const result = list.pop();
    expect(result).toBe(1);
    expect(list.isEmpty()).toBe(true);
    expect(() => list.get(0)).toThrowError();
  });
  test('pop() preserves the remaining order', () => {
    list.push(1).push(2).push(3);
    const result = list.pop();
    expect(result).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(() => list.get(2)).toThrowError();
  });
  test('unshift() adds the first element to an empty list', () => {
    list.unshift(10).push(20);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.isEmpty()).toBe(false);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
    expect(list.isEmpty()).toBe(true);
  });
  test('unshift() prepends value and shifts elements right', ()=> {
    list.push(20).push(30);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(20);
    list.unshift(10);
    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(10);
  });
  test('unshift() preserves order across multiple prepends', () => {
    list.unshift(30).unshift(20).unshift(10);
    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(10);
    expect(list.get(1)).toBe(20);
    expect(list.get(2)).toBe(30);
  });
  test('shift() throws when list is empty', () => {
    expect(() => list.shift()).toThrowError();
  });
  test('shift() removes the only element and makes list empty', () => {
    list.push(10);
    expect(list.length).toBe(1);
    expect(list.shift()).toBe(10);
    expect(list.length).toBe(0);
    console.log(list)
    expect(list.isEmpty()).toBe(true);
    expect(() => list.get(0)).toThrowError();
  });
  test('shift() removes head and preserves order', () => {
    list.push(10).push(20);
    expect(list.length).toBe(2);
    expect(list.shift()).toBe(10);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(20);
    expect(list.pop()).toBe(20);
    expect(list.isEmpty()).toBe(true);
  });
  test('shift() preserves order on multiple elements', () => {
    list.push(10).push(20).push(30).push(40);
    expect(list.shift()).toBe(10);
    expect(list.get(0)).toBe(20);
    expect(list.get(1)).toBe(30);
    expect(list.get(2)).toBe(40);
    expect(list.length).toBe(3);
  });
  test('shift() works after unshift', () => {
    list.unshift(10).push(20).push(30);
    expect(list.shift()).toBe(10);
    expect(list.get(0)).toBe(20);
    expect(list.get(1)).toBe(30);
    expect(list.length).toBe(2);
  });
})

