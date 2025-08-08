# React-Modal-AB

[![npm version](https://img.shields.io/npm/v/react-modal-ab.svg)](https://www.npmjs.com/package/react-modal-ab)
[![npm downloads](https://img.shields.io/npm/dm/react-modal-ab.svg)](https://www.npmjs.com/package/react-modal-ab)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A simple modal component for React.

## Installation

```bash
npm install react-modal-ab
```

---

## Features

- Lightweight
- Automatically injects CSS (no need to import styles manually)  
- Supports predefined sizes: `sm`, `md`, `lg`  
- Customizable via `className` or your own CSS  
- Keyboard accessibility

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

      <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Modal Title !"
          size="md"
          closeOnOverlayClick={true}
        >
        <p>Modal subtitle !</p>
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
| `title`     | `string`           | ✅        | –       | Title displayed inside the modal          |
| `children`  | `React.ReactNode`           | ❌        | –       | Content displayed inside the modal          |
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

## License

MIT — [Callouu](https://github.com/Callouu)

---

## Changelog

### 2.2.1

- Hide content container if is empty

### 2.2.0

- Fix issue when the content don't fit with modal container

### 2.1.1

- Add documentation

### 2.1.0

- Fix modal and text style

### 2.0.0

- CSS is now injected automatically — no need to manually import `Modal.css`  
- Added `size` prop with support for `modal-sm`, `modal-md`, `modal-lg`  
- Simplified usage with no required style setup
