document.getElementById("btn-add-money").addEventListener("click", function () {
  const bankName = document.getElementById("bank-name").value;
  const bankAccountNumber = document.getElementById("account-number").value;
  const amount = getValueById("amount");
  const pinNumber = getValueById("pin-number");
  const mainBalance = getInnerTextById("main-balance");
  if (pinNumber === 1234) {
    const sum = mainBalance + amount;
    setInnerTextByIdAndValue("main-balance", sum);
  } else {
    alert("incorrect Pin");
  }
});
