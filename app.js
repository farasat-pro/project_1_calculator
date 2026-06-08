const displayArea = document.getElementById('display-area');

let equation = "";

// screen button handler

const allButton = document.querySelectorAll('.btn');
for(let i=0; i<allButton.length; i++){
     let button = allButton[i];

     button.addEventListener('click',function(){
        let buttonText = button.innerText;
        handleInput(buttonText);
    });
}
// keyboard button added

window.addEventListener('keydown', function(event){
    let pressedKey = event.key;

    const allowedKey = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','.','=','Enter','Backspace','Escape'];

    if(allowedKey.includes(pressedKey)){
        // add function
        handleInput(pressedKey);
    
    }

});     

// Calculator logic

function handleInput(value){
    if(value === 'C' || value === 'Escape'){
        equation = "";
    }else if(value === '=' || value === 'Enter'){
        try{
            if(equation !== ""){
                equation = eval(equation).toString();
            }
        }
        catch(error){
            equation = 'ERROR';
        }

    }else if(value == 'Backspace'){
        equation = equation.slice(0,-1);
    }else{
        if(equation == 'ERROR'){
            equation = "";
        }
        equation = equation + value;
    }
    displayArea.innerText = equation;
}
