import axios from 'axios';

export const SUBMIT_ORDER_SUCCESS = 'order/SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_FAILURE = 'order/SUBMIT_ORDER_FAILURE';
export const TOGGLE_ORDER_MODAL = 'order/TOGGLE_ORDER_MODAL';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
};

const initialState = {
  isReactModalOpen: false,
  reactModalType: null,
  isAlreadyOrdered: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_ORDER_MODAL:
      return {
        ...state,
        isReactModalOpen: action.modalState,
        reactModalType: action.modalType
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        isAlreadyOrdered: true
      };
    default:
      return state;
  }
}

export function toggleOrderModal(modalState, modalType) {
  return {
    type: TOGGLE_ORDER_MODAL,
    modalState,
    modalType
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

export function sendOrderForm({ username, email, phoneNumber, receiverName, receiverPhoneNumber, receiverAddress, message }) {
  const url = 'https://hooks.slack.com/services/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';
  const data = {
    text: `보내는 사람 이름: ${username}\n보내는 사람 이메일: ${email}\n보내는 사람 전화번호: ${phoneNumber}\n받는 사람 이름: ${receiverName}\n받는 사람 전화번호: ${receiverPhoneNumber}\n받는 사람 주소: ${receiverAddress}\n카드 메세지: ${message}`
  };

  return dispatch =>
    axios.post(url, data, config)
      .then((res) => {
        if (res.status === 200) dispatch(submitOrderSuccess());
      }).catch(() => {
        dispatch(submitOrderFailure());
      });
}

