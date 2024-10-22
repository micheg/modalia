import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modalia.css"; // Ensure this CSS file contains your general styles

const Modalia = ({
  isOpen,
  onClose, // Called after the modal is fully closed
  beforeClose, // Called before the modal starts closing
  title,
  children,
  size = "small",
  verticalPosition = "center",
  beforeOpen, // Called before the modal opens
  onReady, // Called after the modal is rendered for the first time
  customClass, // Custom class for additional styling
}) => {
  useEffect(() => {
    if (isOpen) {
      if (beforeOpen) {
        beforeOpen(); // Call beforeOpen before the modal opens
      }

      document.body.style.overflow = "hidden";

      if (onReady) {
        onReady(); // Call onReady after the modal has rendered
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, beforeOpen, onReady]);

  // Handle the close process, ensuring beforeClose is called
  const handleClose = () => {
    if (beforeClose) {
      beforeClose(); // Call beforeClose before closing the modal
    }
    onClose(); // Call onClose after the modal has closed
  };

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

  const getVerticalClass = () => {
    switch (verticalPosition) {
      case "top":
        return "top";
      case "bottom":
        return "bottom";
      default:
        return "center"; // Centered by default
    }
  };

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        open
        className={`modal-dialog ${getVerticalClass()} ${customClass || ""}`}
        style={{ width: getSize() }}
      >
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="close-button" onClick={handleClose}>
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
