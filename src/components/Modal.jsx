import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
//ref here is a container to give me back the same thing ebery single time

const Modal = ({ children }) => {
  // null is default value
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    //evemt listeners, settimout, setinterval
    //cleanup (when I close the popup) - component will unmount
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
