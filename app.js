const billAmount = document.querySelector('.bill-amount');
const btns = document.querySelectorAll('.tip-percentage');
let tipPerson = document.querySelector('.tip-per-person');
let alertText = document.querySelector('.alert-message');
const guests = document.querySelector('.guests');
let totalPerson = document.querySelector('.total-per-person');
const resetBtn = document.querySelector('.reset');


btns.forEach (function(item){
    item.addEventListener('click', function(){
        percent = item.dataset.percent;
        billTotal = billAmount.value;
        guestNum = guests.value;

        if(guestNum){
            tipAmount = ((billTotal * (percent/100))/guestNum);
            tipTotal = ((billTotal / guestNum) + tipAmount);
            item.classList.toggle('active');
            tipPerson.textContent = `$${tipAmount.toFixed(2)}`;
            totalPerson.textContent = `$${tipTotal.toFixed(2)}`;
        }
        else{
            alertText.textContent = 'Number cannot be zero';
            setTimeout(function(){
                alertText.textContent = '';
            },2000)
        }
        
    });
});

resetBtn.addEventListener('click', reset);

function reset(){
    billAmount.value = '';
    guests.value = '';
    tipPerson.textContent = '$0.00';
    totalPerson.textContent = '$0.00';
}
