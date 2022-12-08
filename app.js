let result = document.querySelector(".result");
let binary = document.querySelector("#binary");
let btn = document.querySelector(".btn");


btn.addEventListener('click', calculate);

function calculate(e){

    e.preventDefault();
    let userInput = binary.value;
    // checking whether the given number is binary or not ?
    let binaryCheck = userInput.split("").every( (e) => (parseInt(e)==0 || parseInt(e)==1 || e == '.'))
    // if not Binary
    if(!binaryCheck){
        result.textContent = `Binary no. will have only 1's & 0's`;
    }
    // if Binary
    else
    {
        // checking whether input has '101.1' "." init ? if it doesn't has == output will be normal decimal number
        if(!userInput.includes('.'))
        {
            let decimalOutput = unsignedConversion(userInput);

            result.textContent = `Decimal Number : ${decimalOutput}`;
        } 
        // if it has Output will be floating number. 
        else
        {
            let newarr2 = userInput.split(".");

            let decimalOutput = unsignedConversion(newarr2[0]);

            // calculation for floating number
            let arr2 = newarr2[1].split("");
            let count = -1;
            let decimalOutput2 = 0;

            arr2.forEach( (e) => {
                decimalOutput2 = decimalOutput2 + (parseInt(e)*2)**count;
                count--;
            })

            result.textContent = `Decimal Number : ${decimalOutput + decimalOutput2}`;
        }  
        
        // common function for normal number calculation
        function unsignedConversion(array1){
            let arr1 = array1.split("");
            let count = arr1.length - 1;
            let decimalOutput = 0;

            arr1.forEach( (e) => {
                decimalOutput = decimalOutput + (parseInt(e)*2)**count;
                count--;

            });
            return decimalOutput;
        }
    }
 
}


