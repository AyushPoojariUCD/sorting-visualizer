# Sorting Algorithm Visualizer 🔢✨

A sleek and interactive Sorting Algorithm Visualizer built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**. Visualize popular sorting algorithms in action with real-time animations and intuitive UI.

🌐 Live Demo: [sorting-visualizer.vercel.app](https://sorting-visualizer-nu-murex.vercel.app)  
📂 Source Code: [GitHub Repository](https://github.com/AyushPoojariUCD/sorting-visualizer)

---

## 🧠 Features

- Visualizes common sorting algorithms:
  - Bubble Sort
  - Insertion Sort
  - Selection Sort
  - Merge Sort
  - Quick Sort
- Adjustable animation speed
- Array size slider
- Reset and replay functionality
- Responsive UI with Tailwind CSS
- Built using the modern App Router (`app/`) of Next.js 14

---

## 📁 Project Folder Structure
```
sorting-visualizer/
├── app/                           # Next.js App Router folder
│   ├── page.tsx                   # Main home page with visualizer
│   └── globals.css                # Tailwind global styles
│
├── components/                    # Reusable UI components
│   ├── ArrayBar.tsx               # Component for rendering bars
│   ├── ControlPanel.tsx           # Controls (buttons, sliders, etc.)
│   └── SpeedSlider.tsx            # Speed control UI
│
├── lib/                           # Logic, helpers, and algorithms
│   ├── algorithms/                # Sorting algorithm implementations
│   │   ├── bubbleSort.ts
│   │   ├── insertionSort.ts
│   │   ├── selectionSort.ts
│   │   ├── mergeSort.ts
│   │   └── quickSort.ts
│   └── utils.ts                   # Utility functions (e.g., delay, shuffle)
│
├── public/                        # Static files (if any)
│   └── favicon.ico
│
├── styles/                        # Optional custom CSS (if needed)
│   └── animations.css             # Bar animation keyframes (optional)
│
├── types/                         # TypeScript types
│   └── index.ts                   # Shared interfaces and types
│
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── README.md
```

---


## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AyushPoojariUCD/sorting-visualizer.git
cd sorting-visualizer
```

### 2. Install dependencies

```bash
npm install
```


### 2. Run the project

```bash
npm run dev
```

