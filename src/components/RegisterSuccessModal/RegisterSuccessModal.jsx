import { Modal } from "../Modal/Modal";
import "./RegisterSuccessModal.css";

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
      <button
        className="register-success-modal__login-btn"
        onClick={onLoginClick}
      >
        Sign in
      </button>
    </Modal>
  );
}

export default RegisterSuccessModal;
