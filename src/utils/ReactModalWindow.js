import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

/* component */
import { OrderComponent } from '../component';

/* utilities */
import { isEventInClassNameNode } from './handleEvent';

/* action */
import { toggleOrderModal } from '../ducks/order';

/* styles */
const styles = require('./ReactModalStyles');

const mapStateToProps = state => {
  return {
    isReactModalOpen: state.order.isReactModalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  toggleOrderModal: values => dispatch(toggleOrderModal(values))
});

class ReactModalWindow extends Component {
  static propTypes = {
    // values
    isReactModalOpen: PropTypes.bool.isRequired,

    // actions
    toggleOrderModal: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
    this._captureAndFireReturnEvent = this._captureAndFireReturnEvent.bind(this);
  }

  closeModal() {
    this.props.toggleOrderModal(false);
  }

  _captureAndFireReturnEvent(event) {
    if (event) {
      const modalCenterContainer = isEventInClassNameNode(event, 'modal-body-center-container', true);
      const modalInnerContainer = isEventInClassNameNode(event, 'modal-inner-container', true);
      if (modalCenterContainer || modalInnerContainer) {
        this.closeModal();
      }
    }
  }

  render() {
    const { isReactModalOpen } = this.props;

    return (
      <Modal
        portalClassName="ReactModal"
        isOpen={isReactModalOpen}
        shouldCloseOnOverlayClick
        onRequestClose={this.closeModal}
        style={styles}
        ariaHideApp={false}>
        <div id="react-modal-window-inner-container" className="modal-inner-container" onClick={this._captureAndFireReturnEvent}>
          <div id="react-modal-window-center-container" className="modal-body-center-container">
            <OrderComponent />
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactModalWindow);
