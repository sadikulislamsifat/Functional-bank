/**
 * 1. add event listener to the withdrow button
 * 2. get withdrow amount from the withdrow input field
 * 2-5. convert string withdrow amount to a number type
 * 3. Clear the withdrow input field after getting the value
 * 4. get the previous withdrow total 
 * 
 * 
 * 5. calculate new withdrow total and set the value to the withdrow total 
 * 
 */

  // step 1

document.getElementById('withdrow-btn').addEventListener('click', function(){

    // step 2
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowFieldAmountString = withdrowField.value;
    // step 2.5
    const withdrowAmount = parseFloat(withdrowFieldAmountString);

    // step 3
    withdrowField.value = '';

    // step 4
    const previousWithdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowTotalAmountString = previousWithdrowTotal.innerText;
    const previousWithdrowTotalAmount = parseFloat(previousWithdrowTotalAmountString);

    //step 5
    const withdrowTotal = withdrowAmount + previousWithdrowTotalAmount;
    previousWithdrowTotal.innerText = withdrowTotal;
    

    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmountString = previousBalanceTotal.innerText;
    const balanceTotal = parseFloat(previousBalanceTotalAmountString);

    const finalBalance = balanceTotal - withdrowAmount;
    previousBalanceTotal.innerText = finalBalance;

    

})