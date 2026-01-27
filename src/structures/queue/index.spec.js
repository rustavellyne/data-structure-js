import { it, expect, describe, beforeEach, afterEach } from 'bun:test';
import { Queue } from './index';

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  afterEach(() => {
    queue = null
  });

  it('creates Queue with length 0', () => {
    expect(queue.length).toBe(0);  
  });
  it('creates Queue 99 value in construtor with length 1', () => {
    queue = new Queue(99);
    expect(queue.length).toBe(1);
  });
  it('enqueue elements and changes length', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);
    expect(queue.length).toBe(3);
  });
  it('dequeue on empty element return null', () => {
    expect(queue.dequeue()).toBeNull;
  });
  it('dequeue return value', () => {
    queue.enqueue(10).enqueue(20).enqueue(30);
    expect(queue.length).toBe(3);
    expect(queue.dequeue()).toBe(10);
    expect(queue.length).toBe(2);
    expect(queue.dequeue()).toBe(20);
    expect(queue.length).toBe(1);
    expect(queue.dequeue()).toBe(30);
    expect(queue.length).toBe(0);
  });
});
