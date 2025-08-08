import React, { useEffect, ReactNode } from "react";

if (typeof document !== "undefined") {
  const styleId = "react-modal-ab-style";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      .modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  width: 90%;
}

.modal-sm { max-width: 400px; }
.modal-md { max-width: 600px; }
.modal-lg { max-width: 800px; }

.modal-close {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.7rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.modal-title {
  text-align: center;
}

.modal-content {
  margin: 1rem 0;
}
    `;
    document.head.appendChild(style);
  }
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  size = "md",
  className = "",
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const sizeStyle =
    {
      sm: "modal-sm",
      md: "modal-md",
      lg: "modal-lg",
    }[size || "md"] || "modal-md";

  return (
    <div
      className="modal-overlay"
      onClick={() => closeOnOverlayClick && onClose()}
    >
      <div
        className={`modal ${sizeStyle} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        )}
        {title && <h2 className="modal-title">{title}</h2>}
        <div className={children ? "modal-content" : ""}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
