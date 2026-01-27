import { it, describe, expect, beforeEach, afterEach } from 'bun:test';
import { Stack } from './index';
 
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  afterEach(() => {
    stack = null;
  })
  it('creates empty stack with length 0', () => {
    stack = new Stack();
    expect(stack.length).toBe(0);
  });
  it('creates stack with single element', () => {
    stack = new Stack(99);
    expect(stack.length).toBe(1);
  });
  it('pushes element to top', () => {
    stack.push(10).push(20).push(30);
    expect(stack.length).toBe(3);
  });
  it('pops element on empty stack return null', () => {
    expect(stack.pop()).toBeNull();
  });
  it('pops element from top of stack and return value', () => {
    stack.push(10).push(20).push(30);
    expect(stack.length).toBe(3);
    expect(stack.pop()).toBe(30);
    expect(stack.length).toBe(2);
    expect(stack.pop()).toBe(20);
    expect(stack.length).toBe(1);
    expect(stack.pop()).toBe(10);
    expect(stack.length).toBe(0);
  });
});
