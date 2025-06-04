# 📁 @huyhoaqtr/shadcn-tree

A reusable and accessible Tree View component for React, built on top of **shadcn/ui**, **Radix UI**, and **Tailwind CSS**.

> ✅ Lightweight · 🎯 Customizable · 🌙 Dark mode ready · 🔗 Radix-based

---

## ✨ Features

- Accordion-based folder structure
- Expand/collapse with persistence
- Custom folder and file icons (Lucide)
- Fully themeable via Tailwind
- Resize aware using `ResizeObserver`
- Optional scroll area integration

---

## 📦 Installation

```bash
npm install @huyhoaqtr/shadcn-tree
# or
yarn add @huyhoaqtr/shadcn-tree
```

**Peer dependencies:**

You must install these in your app:

```bash
npm install react react-dom clsx tailwind-merge @radix-ui/react-accordion lucide-react
```

---

## 🔧 Usage

```tsx
import { Tree, type TreeDataItem } from "@huyhoaqtr/shadcn-tree";

const data: TreeDataItem[] = [
  {
    id: "root",
    name: "Root folder",
    children: [
      { id: "file-1", name: "file-a.ts" },
      { id: "file-2", name: "file-b.ts" },
      {
        id: "sub-folder",
        name: "Sub Folder",
        children: [
          { id: "file-3", name: "nested-file.ts" }
        ]
      }
    ]
  }
];

export default function DemoTree() {
  return (
    <Tree
      data={data}
      initialSelectedItemId="file-1"
      onSelectChange={(item) => console.log("Selected:", item)}
    />
  );
}
```

---

## 🧩 Props

| Prop                 | Type                             | Description                                         |
|----------------------|----------------------------------|-----------------------------------------------------|
| `data`               | `TreeDataItem[] \| TreeDataItem` | Tree structure data                                 |
| `initialSlelectedItemId` | `string`                     | Initial selected node ID                            |
| `onSelectChange`     | `(item?: TreeDataItem) => void`  | Callback when a node is selected                    |
| `expandAll`          | `boolean`                        | Whether to expand all folders initially             |
| `folderIcon`         | `LucideIcon`                     | Custom folder icon                                  |
| `itemIcon`           | `LucideIcon`                     | Custom leaf item icon                               |

---

## 🧱 Dependencies

This library relies on:

- [`shadcn/ui`](https://ui.shadcn.dev/)
- [`@radix-ui/react-accordion`](https://www.radix-ui.com/)
- [`@radix-ui/react-scroll-area`](https://www.radix-ui.com/)
- [`tailwindcss`](https://tailwindcss.com/)
- [`clsx`](https://github.com/lukeed/clsx)
- [`lucide-react`](https://lucide.dev/)

---

## 📂 File structure

```bash
src/
├── components/
│   └── ui/
│       ├── tree.tsx
│       └── scroll-area.tsx
├── hooks/
│   └── use-resize-observer.ts
├── lib/
│   └── utils.ts
```

---

## 📄 License

MIT © [@huyhoaqtr](https://github.com/huyhoaqtr)
