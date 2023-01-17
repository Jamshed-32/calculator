let output = document.calculator.output;

function getvalue(val){
    output.value += val;
}

function calculation (){
    output.value = eval(output.value);

}

function percentageCalculator (){
    if(output.value !=''){
        output.value = eval(output.value) / 100
    }
}

function clearEntry(){
    let userInput = output.value;
    
    let lastIndex = userInput.length - 1

    let sliceValue = userInput.slice(0, lastIndex)
    output.value = sliceValue
}