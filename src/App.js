import { useLayoutEffect, useState } from "react";
import BpPopup from "./components/BpPopup";
import "./styles.css";

const bodyContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum dolor ligula, ac bibendum nunc tempor sed. Morbi finibus ligula lectus, at mattis sapien efficitur a. Sed vel libero turpis. Nam venenatis mauris eget erat faucibus, sit amet rutrum magna hendrerit. Aliquam erat volutpat. Nulla a quam eleifend metus euismod pretium. Nam posuere vitae lectus at mollis. Maecenas vulputate varius erat, nec rutrum enim euismod egestas. Suspendisse libero ligula, vehicula eget libero vitae, eleifend interdum nulla. Sed aliquet, libero a commodo hendrerit, nunc ipsum vulputate turpis, iaculis viverra arcu orci eu mi. Etiam at ligula nisi. Sed vulputate, erat a molestie faucibus, justo mauris convallis erat, ac auctor lectus odio sit amet augue. Phasellus vel rutrum massa. Curabitur iaculis commodo maximus. Quisque euismod imperdiet ante, sit amet malesuada justo pharetra sagittis.";
export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onClose = (e) => {
    e?.stopPropagation();
    setIsPopupOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="App">
        <h1>Hello Users 👋</h1>
        <button aria-label="open-popup-button" onClick={onClose}>
          Open popup by clicking here !!!
        </button>
      </div>
      {isPopupOpen && (
        <BpPopup
          title="Hello"
          autoDismiss="none"
          portalId="modal-root"
          onClose={onClose}
          content={<div>{bodyContent}</div>}
          footer={
            <div className="popup-footer">
              <button onClick={onClose} aria-label="Close">
                Close
              </button>
              <button aria-label="Save"> Save </button>
            </div>
          }
        ></BpPopup>
      )}
    </>
  );
}
