document.getElementById('cash-out-section').style.display = 'none'

document.getElementById('add-money-box').addEventListener( 'click' , function () {
   // alert('add money')
   handleToggle("add-money-section" , "block")
   handleToggle("cash-out-section" , "none")
  // document.getElementById('add-money-section').style.display = 'block'
  // document.getElementById('cash-out-section').style.display = 'none'

})
document.getElementById('cash-out-box').addEventListener( 'click' , function () {
   // alert('add money')
  // document.getElementById('add-money-section').style.display = 'none'
  // document.getElementById('cash-out-section').style.display = 'block'
   handleToggle("add-money-section" , "none")
   handleToggle("cash-out-section" , "block")

})

