document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();
  const agentPin = getValueById('agent-pin-number')
  const cashoutAmount = getValueById("cashout-amount");
  const mainBalance = getInnerTextById("main-balance");
  if (agentPin === 1234) {
    currentBalance = mainBalance - cashoutAmount;
    setInnerTextByIdAndValue("main-balance", currentBalance);
  } else {
    alert("incorrect pin");
  }
});
