import { describe, beforeEach, afterEach, it, expect } from 'bun:test';
import { Tree } from './index';

describe('Tree', () => {
  let tree;
  beforeEach(() => {
    tree = new Tree();
  });
  afterEach(() => {
    tree = null;
  });

  it('inserts element at root', () => {
    tree = new Tree(47);
    expect(tree.root.value).toBe(47);
  });
  it('inserts elements to left and right', () => {
    tree.insert(47).insert(21).insert(76);
    expect(tree.root.value).toBe(47);
    expect(tree.root.left.value).toBe(21);
    expect(tree.root.right.value).toBe(76);
  });
  it('properly inserts elements in tree', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.root.value).toBe(47);
    expect(tree.root.left.value).toBe(21);
    expect(tree.root.right.value).toBe(76);
    expect(tree.root.left.left.value).toBe(18);
    expect(tree.root.left.right.value).toBe(27);
    expect(tree.root.right.left.value).toBe(52);
    expect(tree.root.right.right.value).toBe(82);
  });
  it('return false on empty tree', () => {
    expect(tree.contains(10)).toBeFalse();
  });
  it('return false when not found', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.contains(99)).toBeFalse();
    expect(tree.contains(11)).toBeFalse();
  });
  it('return true wnen found value', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.contains(47)).toBeTrue();
    expect(tree.contains(21)).toBeTrue();
    expect(tree.contains(76)).toBeTrue();
    expect(tree.contains(18)).toBeTrue();
    expect(tree.contains(52)).toBeTrue();
    expect(tree.contains(82)).toBeTrue();
    expect(tree.contains(27)).toBeTrue();
  });
  it('traverses breadth', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.traverseBreadth()).toEqual(
      [47, 21, 76, 18, 27, 52, 82]
    )
  });
  it('traverses DFS preorder', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.dfsPreorder()).toEqual(
      [47, 21, 18, 27, 76, 52, 82]
    )
  });
  it('traverses DFS post order', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.dfsPostorder()).toEqual(
      [18, 27, 21, 52, 82, 76, 47]
    )
  });
  it('traverses DFS In order', () => {
    tree.insert(47).insert(21).insert(76)
      .insert(18).insert(52).insert(82)
      .insert(27);
    expect(tree.dfsInorder()).toEqual(
      [18, 21, 27, 47, 52, 76, 82]
    )
  });
});
