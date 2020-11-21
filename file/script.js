/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
  /* jquery for mobile menu*/

  let accountBalance = parseInt(document.getElementById("accountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 4000) {
      alert("Insufficient Balance.");
   } else {
      var findUserBankAccount = enterName + "Balance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var accountBalance = parseInt(document.getElementById("accountBalance").innerText) - enterAmount;
      document.getElementById("accountBalance").innerText = accountBalance;
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`${enterAmount}/- rupees is sent to Email-id ${enterName}@gmail.com.`);

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`${enterAmount}/- rupees is sent to Email-id ${enterName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
    
   }
}

