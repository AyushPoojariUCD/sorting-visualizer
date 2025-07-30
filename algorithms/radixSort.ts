import { AnimationArrayType } from "@/library/types";

function countingSortByDigit(
  array: number[],
  exp: number,
  animations: AnimationArrayType
) {
  const output = new Array(array.length);
  const count = new Array(10).fill(0);

  for (let i = 0; i < array.length; i++) {
    const index = Math.floor(array[i] / exp) % 10;
    count[index]++;
    animations.push([[i], false]);
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    animations.push([[count[index] - 1, array[i]], true]);
    count[index]--;
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
}

export function generateRadixSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  const max = Math.max(...auxiliaryArray);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(auxiliaryArray, exp, animations);
  }

  runAnimation(animations);
}
