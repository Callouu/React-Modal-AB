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
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }

      .modal-content {
        position: relative;
        background: white;
        padding: 2rem;
        border-radius: 8px;
        max-width: 100%;
        width: auto;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
      }

      .modal-sm {
        width: 300px;
      }

      .modal-md {
        width: 500px;
      }

      .modal-lg {
        width: 800px;
      }

      .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.75rem;
        cursor: pointer;
      }

      .modal-title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #141414;
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
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
