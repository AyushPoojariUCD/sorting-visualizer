import { AnimationArrayType } from "@/library/types";

export function generateShellSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return array;

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  const n = auxiliaryArray.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = auxiliaryArray[i];
      let j = i;
      while (j >= gap && auxiliaryArray[j - gap] > temp) {
        animations.push([[j], false]);
        animations.push([[j, auxiliaryArray[j - gap]], true]);
        auxiliaryArray[j] = auxiliaryArray[j - gap];
        j -= gap;
      }
      animations.push([[j, temp], true]);
      auxiliaryArray[j] = temp;
    }
  }

  runAnimation(animations);
}
