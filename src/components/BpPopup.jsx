import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

function BpPopup({
  title,
  onClose,
  footer,
  content,
  portalId,
  autoDismiss = "focusLoss",
}) {
  const popupRef = useRef(null);
  const onCloseHandler = function (event) {
    event.stopPropagation();
    if (autoDismiss === "focusLoss") {
      onClose();
    }
  };

  const onCloseKeyDownHandler = function (e) {
    e.stopPropagation();
    if (e.key == "Enter" || e.key == "") {
      onClose();
    }
  };

  const handleKeyDown = function (event) {
    const { key } = event;
    if (autoDismiss === "focusLoss" && key === "Escape") {
      onClose();
    }
  };

  const portalElement = document.getElementById(portalId);
  const modalEle = (
    <div className="bppopup-overlay" onClick={onCloseHandler}>
      <div
        ref={popupRef}
        className="bppopup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bppopup-header">
          <div className="bppopup-title">
            <h2>{title}</h2>
          </div>
          <IoMdClose
            tabIndex={0}
            className="bppopup-close-icon"
            onClick={onClose}
            onKeyDown={onCloseKeyDownHandler}
          />
        </div>
        <div className="bppopup-content">{content}</div>
        <div className="bppopup-footer">{footer}</div>
      </div>
    </div>
  );
  if (portalElement == null) {
    return modalEle;
  }

  useLayoutEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    popupRef.current.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return createPortal(modalEle, portalElement);
}

export default BpPopup;
