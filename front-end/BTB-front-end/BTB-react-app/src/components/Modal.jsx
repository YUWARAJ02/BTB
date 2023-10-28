// Modal.jsx

import React from 'react';

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>Close</button>
        <Loginsignup />
      </section>
    </div>
  );
};

export default Modal;
