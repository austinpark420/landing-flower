import axios from 'axios';

export const CONTACT_AND_FEEDBACK_SUCCESS = 'contact/CONTACT_AND_FEEDBACK_SUCCESS';
export const CONTACT_AND_FEEDBACK_FAILURE = 'contact/CONTACT_AND_FEEDBACK_FAILURE';

const config = {
  headers: { 'Content-Type': 'application/json' }
};

export function contactAndFeedbackSuccess() {
  return {
    type: CONTACT_AND_FEEDBACK_SUCCESS
  };
}

export function contactAndFeedbackFailure() {
  return {
    type: CONTACT_AND_FEEDBACK_FAILURE
  };
}

export function sendContactAndFeedback({ username, email, body }) {
  const url = 'https://hooks.slack.com/services/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';
  const data = {
    text: `이름: ${username}\n이메일: ${email}\n메시지: ${body}`
  };

  return dispatch =>
    axios.post(url, data, config)
      .then((res) => {
        if (res.status === 200) dispatch(contactAndFeedbackSuccess());
      }).catch(() => {
        dispatch(contactAndFeedbackFailure());
      });
}
