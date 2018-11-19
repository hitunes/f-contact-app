import "./Modal.css";
import React from "react";
// modal higher Order Component
const ModalLauncher = ({ show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">{children}</section>
    </div>
  );
};
export default ModalLauncher;
