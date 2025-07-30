import { AnimationArrayType } from "@/library/types";

function heapify(
  array: number[],
  length: number,
  i: number,
  animations: AnimationArrayType
) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < length && array[left] > array[largest]) {
    largest = left;
    animations.push([[left], false]);
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
    animations.push([[right], false]);
  }

  if (largest !== i) {
    animations.push([[i, array[largest]], true]);
    animations.push([[largest, array[i]], true]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, length, largest, animations);
  }
}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  const n = auxiliaryArray.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(auxiliaryArray, n, i, animations);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    animations.push([[0, auxiliaryArray[i]], true]);
    animations.push([[i, auxiliaryArray[0]], true]);
    [auxiliaryArray[0], auxiliaryArray[i]] = [auxiliaryArray[i], auxiliaryArray[0]];
    heapify(auxiliaryArray, i, 0, animations);
  }

  runAnimation(animations);
}
