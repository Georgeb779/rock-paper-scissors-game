import React, { useState } from "react";
import "./style.scss";

export default function Modal({
  modalContent
}: {
  modalContent: { value: string; icon: string; btnValue: string };
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className='btn btn-primary'
        type='button'
        onClick={() => setShowModal(true)}
      >
        {modalContent.btnValue}
      </button>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className='modal__container '
          >
            <div className='modal-body__container'>
              <img src={modalContent.value} alt='rules' />

              <div className='modal__close-container'>
                <button
                  className='modal__close-btn'
                  type='button'
                  onClick={() => setShowModal(false)}
                >
                  <img src={modalContent.icon} alt='close-modal' />
                </button>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
