import axios from 'axios';

export const SUBMIT_ORDER_SUCCESS = 'order/SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_FAILURE = 'order/SUBMIT_ORDER_FAILURE';
export const TOGGLE_ORDER_MODAL = 'order/TOGGLE_ORDER_MODAL';

const config = {
  headers: { 'Content-Type': 'application/json' }
};

const initialState = {
  isReactModalOpen: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_ORDER_MODAL:
      return {
        ...state,
        isReactModalOpen: action.modalState
      };
    default:
      return state;
  }
}

export function toggleOrderModal(modalState) {
  return {
    type: TOGGLE_ORDER_MODAL,
    modalState
  };
}

export function submitOrderSuccess() {
  return {
    type: SUBMIT_ORDER_SUCCESS
  };
}

export function submitOrderFailure() {
  return {
    type: SUBMIT_ORDER_FAILURE
  };
}

export function sendOrderForm({ value }) {
  const url = 'https://hooks.slack.com/services/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';
  const data = {
    text: value
  };

  return dispatch =>
    axios.post(url, data, config)
      .then((res) => {
        if (res.status === 200) dispatch(submitOrderSuccess());
      }).catch(() => {
        dispatch(submitOrderFailure());
      });
}

