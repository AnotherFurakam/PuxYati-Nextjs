import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {

  useEffect(() => {
    if (isOpen) {
      document.querySelector('body')?.classList.add('overflow-hidden')
    }else{
      document.querySelector('body')?.classList.remove('overflow-hidden')
    }
  },[isOpen])

  return (
    <>
      {
        isOpen ?
          createPortal(
            (
              <div className={clsx('modal-background',isOpen && 'animate__fadeIn')}>
                <div className="modal-body">
                  {children}
                </div>
              </div>
            ),
            document.querySelector('#modal-root') as Element
          )
          : null
      }
    </>
  );
}
export default Modal;