import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

/* component */
import { OrderComponent, OrderInfo, ContactUsComponent } from '../component';

/* utilities */
import { isEventInClassNameNode } from './handleEvent';

/* action */
import { toggleOrderModal } from '../ducks/order';

/* styles */
const styles = require('./ReactModalStyles');

const mapStateToProps = ({ order }) => {
  return {
    isReactModalOpen: order.isReactModalOpen,
    reactModalType: order.reactModalType,
    isAlreadyOrdered: order.isAlreadyOrdered
  };
};

const mapDispatchToProps = dispatch => ({
  toggleOrderModal: values => dispatch(toggleOrderModal(values))
});

class ReactModalWindow extends Component {
  static propTypes = {
    // values
    isReactModalOpen: PropTypes.bool.isRequired,
    reactModalType: PropTypes.string,
    isAlreadyOrdered: PropTypes.bool.isRequired,

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
    const { isReactModalOpen, reactModalType, isAlreadyOrdered } = this.props;

    const isContactus = reactModalType === 'contact-us';
    const orderComponent = !isAlreadyOrdered ? <OrderComponent /> : <OrderInfo />;
    const modalComponent = isContactus ? <ContactUsComponent /> : orderComponent;

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
            {modalComponent}
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactModalWindow);
