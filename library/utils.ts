import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";
import { generateQuickSortAnimationArray} from "@/algorithms/quickSort";
import { generateShellSortAnimationArray } from "@/algorithms/shellSort";
import { generateCountingSortAnimationArray } from "@/algorithms/countingSort";
import { generateRadixSortAnimationArray } from "@/algorithms/radixSort";
import { generateHeapSortAnimationArray } from "@/algorithms/heapSort";


import { SortingAlgorithmType } from "./types";

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const MNI_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
  { label: "Heap", value: "heap" },
  { label: "Shell", value: "shell" },
  { label: "Counting", value: "counting" },
  { label: "Radix", value: "radix" },
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "heap":
      generateHeapSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "shell":
      generateShellSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "counting":
      generateCountingSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "radix":
      generateRadixSortAnimationArray(isSorting, array, runAnimation);
      break;
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part, reducing the unsorted region by one each iteration.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort is a divide-and-conquer algorithm that divides the list into halves, recursively sorts them, and then merges the sorted halves to produce the final sorted list.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' and partitions the array into elements less than and greater than the pivot. It recursively sorts the subarrays and combines them to get the sorted result.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  heap: {
    title: "Heap Sort",
    description:
      "Heap sort builds a max heap and repeatedly removes the largest element (the root), placing it at the end of the array. This continues until all elements are sorted.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  shell: {
    title: "Shell Sort",
    description:
      "Shell sort is an optimization of insertion sort that allows the exchange of far-apart elements. It works by sorting elements at specific intervals and reducing the interval over time.",
    worstCase: "O(n²)",
    averageCase: "O(n^1.5)",
    bestCase: "O(n log n)",
  },
  counting: {
    title: "Counting Sort",
    description:
      "Counting sort is a non-comparison-based algorithm that counts the frequency of each unique element. It then uses this information to place elements in their correct positions.",
    worstCase: "O(n + k)",
    averageCase: "O(n + k)",
    bestCase: "O(n + k)",
  },
  radix: {
    title: "Radix Sort",
    description:
      "Radix sort processes the digits of numbers starting from the least significant to the most significant, using a stable sort like counting sort at each digit position.",
    worstCase: "O(nk)",
    averageCase: "O(nk)",
    bestCase: "O(nk)",
  },
};
