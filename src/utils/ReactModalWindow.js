import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

/* component */
import { OrderComponent } from '../component';

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
  }

  closeModal() {
    this.props.toggleOrderModal(false);
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
        <div id="react-modal-window-inner-container">
          <div id="react-modal-window-center-container">
            <OrderComponent />
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactModalWindow);
