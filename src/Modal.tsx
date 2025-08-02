import React, { useEffect, ReactNode } from "react";
import "./style.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
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
          <button
            className="modal-close"
            onClick={onClose}
          >
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