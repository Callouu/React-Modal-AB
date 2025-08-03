# React-Modal-AB

[![npm version](https://img.shields.io/npm/v/react-modal-ab.svg)](https://www.npmjs.com/package/react-modal-ab)
[![npm downloads](https://img.shields.io/npm/dm/react-modal-ab.svg)](https://www.npmjs.com/package/react-modal-ab)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A simple, accessible, and customizable modal component for React.

## Installation

```bash
npm install react-modal-ab
```

---

## Features

- ✅ Lightweight and accessible  
- ✅ Automatically injects required CSS (no need to import styles manually)  
- ✅ Supports predefined sizes: `sm`, `md`, `lg`  
- 🎨 Customizable via `className` or your own CSS  
- 🔐 Keyboard accessibility and focus handling  

---

## Usage

```tsx
import React, { useState } from 'react';
import { Modal } from 'react-modal-ab';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <h2>Hello 👋</h2>
        <p>This is a large modal.</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
```

---

## Props

| Prop        | Type                        | Required | Default | Description                                 |
|-------------|-----------------------------|----------|---------|---------------------------------------------|
| `isOpen`    | `boolean`                   | ✅        | –       | Controls whether the modal is visible       |
| `onClose`   | `() => void`                | ✅        | –       | Function triggered when closing the modal   |
| `children`  | `React.ReactNode`           | ✅        | –       | Content displayed inside the modal          |
| `size`      | `'sm' \| 'md' \| 'lg'`   | ❌        | `'md'`  | Predefined modal size                        |
| `className` | `string`                   | ❌        | `''`    | Optional custom class for the modal content |

---

## Sizes

Use the `size` prop to adjust modal width:

| Value | Width  |
|-------|--------|
| `sm`  | 300px  |
| `md`  | 500px  |
| `lg`  | 800px  |

Example:

```tsx
<Modal size="sm" ... />
```

---

## Custom Styling

Override modal styles using the `className` prop:

```tsx
<Modal className="my-custom-modal" ... />
```

Default CSS classes (automatically injected):

- `.modal-overlay`  
- `.modal-content`  
- `.modal-close`  
- `.modal-sm`, `.modal-md`, `.modal-lg`

---

## Build & Publish (for maintainers)

```bash
npm install
npm run build
npm version patch    # or minor / major
npm publish --access public
```

---

## License

MIT — [Callouu](https://github.com/Callouu)

---

## Changelog

### 1.0.1

- 🧪 CSS is now injected automatically — no need to manually import `Modal.css`  
- 🎛️ Added `size` prop with support for `modal-sm`, `modal-md`, `modal-lg`  
- ✨ Simplified usage with no required style setup
