document.getElementById("btn-add-money").addEventListener("click", function () {
  const bankName = document.getElementById("bank-name").value;
  const bankAccountNumber = document.getElementById("account-number").value;
  const amount = parseInt(document.getElementById("amount").value);
  const pinNumber = parseInt(document.getElementById("pin-number").value);

  const currentAmount = parseInt(document.getElementById("total-amount-text").innerText);
  const newAmount = currentAmount + amount;
  console.log(newAmount);

  const totalAmountField = document.getElementById("total-amount-text");

  console.log(bankAccountNumber, amount, pinNumber, bankName);

  if (pinNumber === 1234) {
    totalAmountField.innerText = newAmount;
  } else {
    alert("incorrect Pin");
  }
});
