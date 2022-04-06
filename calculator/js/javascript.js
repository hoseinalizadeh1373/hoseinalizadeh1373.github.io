
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearbutton = document.getElementById('clear');
const backbutton = document.getElementById('backspace');
const minusbutton = document.getElementById('minus');
const plusbutton = document.getElementById('plus');
const equalbutton = document.getElementById('equal');
const dividebutton = document.getElementById('divide');
const multiplybutton = document.getElementById('multiply');
const squarebutton = document.getElementById('square');
const rootbutton = document.getElementById('root');

let lastoperation = '';
let memory =0;


buttons.addEventListener('click',inputnumber);
function inputnumber (event){
    if (display.textContent.length>15) {
        return;
    }
    let data = event.target.dataset.input;
     operator(data);
}

function operator(data2) {
    if (data2) {
        if (lastoperation=='equal') {
            display.textContent=0;
            lastoperation='';
        }
       if (data2 === '.') {
           if (!display.textContent.includes('.')) {
               display.textContent+=data2;
             }
           }
           else{
               display.textContent+=data2;
               if (!display.textContent.includes('.')) {
                   display.textContent=Number(display.textContent);
               }   
       }
   }
}
clearbutton.addEventListener('click',()=>{
display.textContent =0;
lastoperation='';
memory=0;
});

minusbutton.addEventListener('click',()=>{
    memory = Number(display.textContent);
    lastoperation = 'minus';
    display.textContent=0;
});

plusbutton.addEventListener('click',()=>{
    memory = Number(display.textContent);
    lastoperation = 'plus';
    display.textContent=0;
});

dividebutton.addEventListener('click',()=>{
    memory = Number(display.textContent);
    lastoperation = 'divide';
    display.textContent=0;
});

multiplybutton.addEventListener('click',()=>{
    memory = Number(display.textContent);
    lastoperation = 'multiply';
    display.textContent=0;
});

equalbutton.addEventListener('click',()=>{
if (lastoperation!=='') {
    let number = Number(display.textContent);
    if (lastoperation=='minus') {
        display.textContent = memory - number;
    }
    else if (lastoperation=='plus') {
        display.textContent = memory + number;
    }
    else if (lastoperation=='divide') {
        display.textContent = memory / number;
    }
    else if (lastoperation=='multiply') {
        display.textContent = memory * number;
    }
    lastoperation='equal';
}
});

backbutton.addEventListener('click',()=>{
if (display.textContent.length==1) {
    display.textContent=0;
}
else{
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
}
});

squarebutton.addEventListener('click',()=>{
display.textContent =Math.pow(Number(display.textContent),2);
lastoperation='';
});

rootbutton.addEventListener('click',()=>{
display.textContent = Math.sqrt(display.textContent);
lastoperation = '';
});

document.addEventListener('keydown',(event)=>{
let name = event.key;
let code = event.keyCode;
if ((code >=48 && code<=57)|| (code >=96 && code<=105) ) {
    operator(name);    
}
else  {
    switch(code)
    {
        case 106:
            multiplybutton.click();
            break;
        case 107:    
            plusbutton.click();
            break;
        case 109:
            minusbutton.click();
            break;
        case 110:
            operator(name);
            break;
        case 111:
            dividebutton.click();
            break;
        case 8:
            backbutton.click();
            break;
        case 13:
            equalbutton.click();
            break;
        case 187:
            equalbutton.click()
            break;
        default :return;
    }
}

});