# Modalia

**Modalia** is a lightweight React library that leverages the native HTML `<dialog>` tag to create flexible and accessible modals. By using React Portals, Modalia ensures that the modal is directly attached to the `body` element of the DOM, allowing for clean integration without affecting the rest of the component tree. The library enforces that only one modal can be active at a time, providing a focused and streamlined user experience. 

---

**Modalia** provides a simple API with a few key parameters for customization. The `isOpen` prop controls the visibility of the modal, while the `onClose` function is triggered when the user closes the modal (such as by clicking the close button). The `title` prop allows you to set a title for the modal, and the `size` prop can be used to adjust the modal’s dimensions, with options like `small`, `medium`, `large`, and `xl`. The modal content is passed as `children`, making it easy to customize what appears inside the dialog. Modalia ensures that only one modal can be active at a time, and the component uses React Portals to attach the modal directly to the DOM, ensuring proper stacking and isolation from the rest of your app's layout.

---

you can see a demonstration here: [https://micheg.altervista.org/modalia_test/](https://micheg.altervista.org/modalia_test/)

---

more options may be available in the future

---

## Installation

```bash
npm install modalia
```

## Build

```bash
npm install
npm build
```

## Usage

```jsx
import React, { useState } from "react";
import Modalia from './Modalia';
import './Modalia.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState("small");

  const openModal = (size) => {
    setModalSize(size);
    setIsOpen(true);
  };

  return (
    <div className="App">
      <h1>Modalia Component Demo</h1>
      <button onClick={() => openModal("small")}>Open Small Modal</button>
      <button onClick={() => openModal("medium")}>Open Medium Modal</button>
      <button onClick={() => openModal("large")}>Open Large Modal</button>
      <button onClick={() => openModal("xl")}>Open XL Modal</button>

      <Modalia
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`This is a ${modalSize} Modal`}
        size={modalSize}
      >
        <p>
          This is content inside the {modalSize} modal. It is fully
          customizable!
        </p>
      </Modalia>
    </div>
  );
}

export default App;
```
