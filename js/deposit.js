/**
 * 1. add event listener to the deposit button
 * 2. get deposit amount from the deposit input field
 * 2-5. convert string deposit amount to a number type
 * 3. Clear the deposit input field after getting the value
 * 4. get the previous deposit total 
 * 
 * 
 * 5. calculate new deposit total and set the value to the deposit total 
 * 
 */


// step 1
document.getElementById('deposit-btn').addEventListener('click', function(){

   // step 2
   const depositField = document.getElementById('deposit-field');
   const depositAmountString = depositField.value;
   // step 2.5
   const depositAmount = parseFloat(depositAmountString);
   // step 3
   depositField.value = '';
   
   // step 4
   const previousDepositTotal = document.getElementById('deposit-total');
   const previousDepositTotalAmountString = previousDepositTotal.innerText;
   const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountString);

   // step 5
   const depositTotal = depositAmount + previousDepositTotalAmount;
   previousDepositTotal.innerText = depositTotal;


   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalString = balanceTotal.innerText;
   const newBalanceTotal = parseFloat(balanceTotalString);

   
   const totalDepositBalance = newBalanceTotal + depositAmount;
   balanceTotal.innerText = totalDepositBalance;
   
   
    
})


