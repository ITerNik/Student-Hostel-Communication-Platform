import {ReactNode} from "react";

interface ModalProps {
    children : ReactNode
    title : string
    onClose: () => void
}
export function Modal({children, title, onClose} : ModalProps) {
    return (
        <>
            <div className="fixed bg-black/50 inset-0" onClick={onClose}/>
            <div className="bg-white w-[60%] p-5 fixed left-1/2 -translate-x-1/2 rounded top-10 text-center">
                <h2 className="font-semibold text-3xl text-gray-800 mb-10">
                    {title}
                </h2>
                {children}
            </div>
        </>
    )
}