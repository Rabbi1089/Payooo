document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const accountNumber = document.getElementById("account-number").value;
  const pin = document.getElementById("account-pin").value;
  const accountNumberSpan = document.getElementById("account-number-span");

  // Check account number length
  if (accountNumber.length !== 11) {
    accountNumberSpan.innerText = "Account Number must be 11 digits";
    return; // stop further execution if invalid
  } else {
    accountNumberSpan.innerText = ""; // clear any previous message
  }

  // Convert and check pin
  const pinInt = parseInt(pin);
  if (pinInt === 1234) {
    console.log("PIN OK");
  } else {
    console.log("PIN not OK");
  }

  // Show alert only after both fields are checked
  alert(`Account Number: ${accountNumber}\nPIN: ${pin}`);
  window.location.replace('main.html')
});
