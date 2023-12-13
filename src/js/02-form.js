// const FEEDBACK_MESSAGE_KEY = "feedback-form-state";

// const emailForm = document.querySelector(".feedback-form");
// const inputEmail = emailForm.querySelector("input");
// const textarea = emailForm.querySelector("textarea");

// const initiaMessage = localStorage.getItem(FEEDBACK_MESSAGE_KEY);

// if (initiaMessage) {
//     textarea.value = initiaMessage;
// }


// emailForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     localStorage.removeItem(FEEDBACK_MESSAGE_KEY);

//     form.reset()
// })

// textarea.addEventListener("input", (event) => {
//     const message = event.target.value;
//     localStorage.setItem (FEEDBACK_MESSAGE_KEY, message)
// })
// inputEmail.addEventListener("input", (event) => {
//     const message = event.target.value;
//     localStorage.setItem (FEEDBACK_MESSAGE_KEY, message)
// })


const FEEDBACK_FORM_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form");
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const loadFormData = () => {
  const savedFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) || {};
  emailInput.value = savedFormData.email || "";
  messageTextarea.value = savedFormData.message || "";
};

const saveFormData = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(FEEDBACK_FORM_KEY);
    feedbackForm.reset();
  } else {
    alert("Please fill in both email and message fields before submitting.");
  }
};

window.addEventListener("load", loadFormData);

feedbackForm.addEventListener("input", saveFormData);

feedbackForm.addEventListener("submit", handleFormSubmit);

