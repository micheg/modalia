import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modalia = ({ isOpen, onClose, title, children, size = "small" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getSize = () => {
    switch (size) {
      case "medium":
        return "60vw";
      case "large":
        return "80vw";
      case "xl":
        return "90vw";
      default:
        return "40vw"; // Default to small
    }
  };

  return createPortal(
    <div className="modal-backdrop">
      <dialog open className="modal-dialog" style={{ width: getSize() }}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="content">{children}</div>
      </dialog>
    </div>,
    document.body
  );
};

export default Modalia;
