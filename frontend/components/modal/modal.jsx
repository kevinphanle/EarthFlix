import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ProfileModal from './profile_modal';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'profile':
      component = <ProfileModal />;
      break
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={e => e.stopPropagation()}>
      {component}
    </div>
  )
}

const msp = state => {
  return {
    modal: state.ui.modal
  };
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(Modal);