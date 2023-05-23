const buttonsEl = document.querySelectorAll('button');
const inputFieldEl = document.getElementById('result');

function clearResult(){
    inputFieldEl.value = '';
}

function claculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue;
}

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener('click', ()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue === 'C'){
            clearResult();
        } else if (buttonValue === '='){
            claculateResult();
        } else{
            appendValue(buttonValue);
        }
    })
}