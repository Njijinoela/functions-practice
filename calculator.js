function calculate(num1, num2, operation) {
    
    if (operation === 'add'){
        console.log (num1+num2);
    }else if (operation === 'subtraction'){
        console.log (num1-num2);
    }else if (operation === 'divide'){
        if (num2 === 0){
            console.log ("a number cannot be divided by 0");
        }else{
         console.log (num1/num2);
        } 
    }else if (operation === 'multiplication'){
        console.log (num1*num2);
    }else{
        return null;
    }
}
calculate(10,5, 'add');
calculate(10,5, 'subtraction');
calculate(10,0, 'divide');
calculate(10,5, 'divide');
calculate(10,5, 'multiplication');
