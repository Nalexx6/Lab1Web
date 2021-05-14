const feedbackLink = document.querySelector('.feedback_link')
const body = document.querySelector('body')
const feedback = document.getElementById('feedback')
const feedbackCloseBtn = document.querySelector('.feedback_close')

let name = document.getElementById("feedback-name")
let email = document.getElementById("feedback-email")
let message = document.getElementById("feedback-message")

feedbackLink.addEventListener("click", function() {
	feedback.classList.add('open');
	body.classList.add('lock');
	feedback.addEventListener("click", function(e){
		if (!e.target.closest('.feedback_content'))
			feedbackClose()
	})
})

feedbackCloseBtn.addEventListener("click", function(){
	feedbackClose()
})

function feedbackClose(){
	name.value = ''
	email.value = ''
	message.value = ''
	feedback.classList.remove('open')
	body.classList.remove('lock')
}

(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
          return
        }
        let output = {
            name: name.value,
            email: email.value,
            text: message.value,
            [Symbol.toPrimitive](hint) {
                if (hint === 'string') {
                    return `Name: ${this.name}\nEmail: ${this.email}\nText: ${this.text}\n`;
                }
                return null;
            }
          }
        alert(output)
        feedbackClose()
      }, false)
    })
})()