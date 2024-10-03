function calculateTotal(unitPrice, quantity){
    let result =  unitPrice* quantity;
    // console.log (result);
    return result;
}
 const totalCost = calculateTotal(15, 3);
 console.log(totalCost);