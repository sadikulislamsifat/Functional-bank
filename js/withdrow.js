


document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowFieldAmountString = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowFieldAmountString);


    withdrowField.value = '';

    const previousWithdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowTotalAmountString = previousWithdrowTotal.innerText;
    const previousWithdrowTotalAmount = parseFloat(previousWithdrowTotalAmountString);


    const withdrowTotal = withdrowAmount + previousWithdrowTotalAmount;
    previousWithdrowTotal.innerText = withdrowTotal;
    

    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmountString = previousBalanceTotal.innerText;
    const balanceTotal = parseFloat(previousBalanceTotalAmountString);

    const finalBalance = balanceTotal - withdrowAmount;
    previousBalanceTotal.innerText = finalBalance;

    

})