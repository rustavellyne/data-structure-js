import { describe, it, expect, beforeEach, afterEach } from 'bun:test';
import { DoubleLinkedList } from './index';

describe('Double Linked List', () => {
  let list;
  beforeEach(() => {
    list = new DoubleLinkedList();
  });
  afterEach(() => {
    list = null;
  });
  it('creates empty list', () => {
    expect(list.length).toBe(0);
    expect(list.isEmpty()).toBe(true);
  });
  it('creates list with single value', () => {
    list = new DoubleLinkedList(99);
    expect(list.length).toBe(1);
  });
  it('pushes values to list and increase length', () => {
    list.push(10).push(20);
    expect(list.length).toBe(2);
    list.push(30);
    expect(list.length).toBe(3);
  });
  it('pops return null on empty list', () => {
    expect(list.pop()).toBeNull();
  });
  it('pops value from list', () => {
    list.push(10).push(20);
    expect(list.pop()).toBe(20);
    expect(list.length).toBe(1);
  });
  it('pops correct value from list with one element', () => {
    list.push(15);
    expect(list.pop()).toBe(15);
    expect(list.isEmpty()).toBe(true);
    expect(list.length).toBe(0);
  });
  it('adds value to begining of empty list', () => {
    list.unshift(10);
    expect(list.length).toBe(1);
    expect(list.pop()).toBe(10);
    expect(list.length).toBe(0);
  });
  it('adds value to beging of list', () => {
    list.unshift(10).unshift(20);
    expect(list.length).toBe(2);
    expect(list.pop()).toBe(10);
  });
});
