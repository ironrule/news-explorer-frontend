import { Modal } from "../Modal/Modal";

function RegisterSuccessModal({
  isOpen,
  handleClose,
  onLoginClick,
  handleOutsideClick,
}) {
  return (
    <Modal
      title="Registration successfully completed!"
      isOpen={isOpen}
      handleClose={handleClose}
      handleOutsideClick={handleOutsideClick}
    >
      <button className="modal__login-btn" onClick={onLoginClick}>
        Sign in
      </button>
    </Modal>
  );
}

export default RegisterSuccessModal;
