import React, { useEffect } from "react";
import {AiOutlineCloseSquare} from "react-icons/ai"

const Modal = ({title, show, onClose, size="md", customClass, children}) => {
    const openModal =()=> {
        document.getElementById("backdrop").style.display = "block"
        document.getElementById("exampleModal").style.display = "block"
        document.getElementById("exampleModal").classList.add("show")
    }
    const closeModal= ()=> {
        document.getElementById("exampleModal").classList.add("exit")
        setTimeout(()=> {
            document.getElementById("backdrop").style.display = "none"
            document.getElementById("exampleModal").style.display = "none"
            document.getElementById("exampleModal").classList.remove("show")
            document.getElementById("exampleModal").classList.remove("exit")
        }, 500); 
        
    }
    useEffect(() => {
        if(show === true){
            openModal()
        }else if(show=== false){
            closeModal()
        }
        
    }, [show]);



  return (
    <>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-modal="true"
            role="dialog">
            <div className={`modal-dialog modal-${size} ${customClass}`} role="document">
                <div className="modal-content">
                    <div className="modal-header d-flex">
                        <h5 className="modal-title flex justify-center" id="exampleModalLabel">{title}</h5>

                        {/* <button type="button" className="close" aria-label="Close" onClick={()=>onClose()}>
                            <span aria-hidden="true">×</span>
                        </button> */}
                        <span type="button" className="close p-5 flex justify-end" data-dismiss="modal" aria-label="Close" onClick={()=>onClose()} >
                            <span aria-hidden="true">
                                <AiOutlineCloseSquare className="bg-red-500 text-white" size={22} />
                            </span>
                        </span> 
                        {/* <div>
                            <FontAwesomeIcon icon="fa-solid fa-xmark" size="2x" className="close pointer" onClick={()=>onClose()} />
                        </div> */}
                    </div>
                    <div className="modal-body">
                        {show && children}
                    </div>
                </div>
            </div>
        </div>
        <div className="modal-backdrop fade show" id="backdrop" style={{display: "none"}} ></div>
    </>
  );
};

export default Modal;