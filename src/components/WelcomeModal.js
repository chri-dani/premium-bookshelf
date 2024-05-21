import React from 'react';
import Modal from 'react-modal';

const WelcomeModal = (props) => (
  <Modal
    isOpen={props.showModal}
    closeTimeoutMS={200}
    className="modal"
  > 
    <h1>h1</h1>
    
  </Modal>
);

export default WelcomeModal;