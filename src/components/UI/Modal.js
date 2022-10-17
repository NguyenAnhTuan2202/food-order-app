import styled from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className={styled.modal}>
      <div className={styled.content}>{props.children}</div>
    </div>
  );
};

const elementPortal = document.querySelector("#overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideCart={props.onHideCart} />,
        elementPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        elementPortal
      )}
    </>
  );
};

export default Modal;
