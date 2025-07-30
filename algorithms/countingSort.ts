import { AnimationArrayType } from "@/library/types";

export function generateCountingSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  const output = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
    animations.push([[i], false]);
  }

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    animations.push([[count[array[i]] - 1, array[i]], true]);
    count[array[i]]--;
  }

  runAnimation(animations);
}
