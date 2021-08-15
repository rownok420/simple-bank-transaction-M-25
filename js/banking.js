// Deposit section 

document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    
    if(newDepositAmount == '' && newDepositAmount != 'number' || newDepositAmount < 0){
        alert('Please Enter Your Ammount,Whatever You Want to Deposit')
    }else{
        // get the amount deposit
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmount = depositInput.value;

        // update diposit total
        const depositTotal = document.getElementById('deposit-total');
        const prevDepAmount = depositTotal.innerText;
        const newDepositTotal = parseFloat(prevDepAmount) + parseFloat(newDepositAmount);
        depositTotal.innerText = newDepositTotal;
    
        // update account balance
        const balanceTotal = document.getElementById('balance-total');
        const newBalanceTotal = parseFloat(balanceTotal.innerText) + parseFloat(newDepositAmount);
        balanceTotal.innerText = newBalanceTotal;


        // clear the deposit input field
        depositInput.value = '';
    }
    
    /* // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    // update diposit total
    const depositTotal = document.getElementById('deposit-total');
    const prevDepAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(prevDepAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;
   
    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const newBalanceTotal = parseFloat(balanceTotal.innerText) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field
    depositInput.value = ''; */
})

// Withdraw section 
document.getElementById('withdraw-btn').addEventListener('click',function(){

    // get the amount deposit
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    if(newWithdrawAmount == '' && newWithdrawAmount != 'number' || newWithdrawAmount < 0){
        alert('Please Enter Your Ammount,Whatever You Want to Withdraw')
    }else{
        // get the amount deposit
        const withdrawInput = document.getElementById('withdraw-input');
        const newWithdrawAmount = withdrawInput.value;

        // update withdraw total
        const withdrawTotal = document.getElementById('withdraw-total');
        const prevWithAmount = withdrawTotal.innerText;
        const newWithTotal = parseFloat(prevWithAmount) + parseFloat(newWithdrawAmount)
        withdrawTotal.innerText = newWithTotal;

        // update account balance
        const balanceTotal = document.getElementById('balance-total');
        const restBalanceTotal = parseFloat(balanceTotal.innerText) - parseFloat(newWithdrawAmount);
        balanceTotal.innerText = restBalanceTotal;

        // clear the deposit input field
        withdrawInput.value = '';
    }

    
    /* // get the amount deposit
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const prevWithAmount = withdrawTotal.innerText;
    const newWithTotal = parseFloat(prevWithAmount) + parseFloat(newWithdrawAmount)
    withdrawTotal.innerText = newWithTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const restBalanceTotal = parseFloat(balanceTotal.innerText) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = restBalanceTotal;


    // clear the deposit input field
    withdrawInput.value = ''; */
})

// logout seciton
document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href = 'index.html';
})