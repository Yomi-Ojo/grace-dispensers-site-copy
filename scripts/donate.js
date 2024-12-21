
const nameDonor = document.getElementById('name').value;
const phone = document.getElementById('phone').value;

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_16cb22cefa9ae19dba682e8b326589eb93c777a9', // Replace with your public key
    email: document.getElementById('email').value,
    amount: document.getElementById('amount').value * 100,
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
    onClose: function () {
      alert('Window closed.')
    },
    callback: function (response) {
      let message = 'Payment complete! Reference: ' + response.reference
      alert(message)

      setInterval(() => {
        window.location = 'https://hoseafavour123.github.io/grace-dispensers-site/'
      })
    },
  })

  handler.openIframe();
}

