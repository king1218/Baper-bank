
document.getElementById('Deposite-btn').addEventListener('click' , function(){

    const getDeposite = document.getElementById('Deposite-input');
    const DepositeValue= getDeposite.value;
    
   const getDepositeUpdate = document.getElementById('Deposite-update');
  
   const preDeposite = getDepositeUpdate.innerText;
   const updateDeposite = parseFloat(preDeposite) + parseFloat(DepositeValue);
   getDepositeUpdate.innerText =  updateDeposite;

//    Balence

const Balence = document.getElementById('Balence-update');
 
const PreBalence = Balence.innerText;
const BalenceUpdate = parseFloat(DepositeValue) + parseFloat(PreBalence);
Balence.innerText = BalenceUpdate;

getDeposite.value = '';

});

// widrow

document.getElementById('Withdrow-btn').addEventListener('click', function(){

   const getWithdraw = document.getElementById('Withdrow-input');
   const getWithdrawAmount = parseFloat(getWithdraw.value);  

   const getUpdateWithdrowText = document.getElementById('Withdraw-update');
 
   const PreWithdraw = parseFloat( getUpdateWithdrowText.innerText);

   const TotalWithdraw = PreWithdraw + getWithdrawAmount;
   getUpdateWithdrowText.innerText = TotalWithdraw;

  
// update Balence

    const getBalenceAfterwithdrow = document.getElementById('Balence-update');
    const getBalenceAfterwithdrowAmount = parseFloat( getBalenceAfterwithdrow.innerText);
    const TotalBalneceAfterwthdrow = getBalenceAfterwithdrowAmount - getWithdrawAmount ;
    getBalenceAfterwithdrow.innerText = TotalBalneceAfterwthdrow;
 
   getWithdraw.value ='';

}); 
