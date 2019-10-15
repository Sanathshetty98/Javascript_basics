function tip_calculator( bill){
    console.log(bill)
  
        if( bill < 50){
            bill= bill + (bill*0.2);
            tipBill.push(bill);
        }
         else if( bill > 50 && bill < 200){
            bill= bill + (bill*0.15);
            tipBill.push(bill);
        }
        else{
            bill= bill + (bill*0.1);
            tipBill.push(bill);
        }
}
function print(tipBill, index){
    console.log("The final Bill for order  " +(index+1) + ":");
    console.log(tipBill);
}
var bill = [124,48,268];
var tipBill = [];
bill.forEach(tip_calculator);
tipBill.forEach(print);