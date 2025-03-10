import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import ModalContainer from "./styled";

export default function Modal({ children, open, onClose, className = "" }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal.showModal();
        }

        return () => modal.close();
    }, [open]);

    return createPortal(
        <ModalContainer ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {children}
        </ModalContainer>,
        document.getElementById("modal")
    );
}
