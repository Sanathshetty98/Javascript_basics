
var bills = {
    amount : [124,48,268,180,42],
    tip_calculator : function ( totalBill, tipBill){
            var tip = 0, bill = 0;
            console.log('The original amount array');
            for( var i=0; i < this.amount.length; i++){
                console.log(this.amount[i]);
            if( bill < 50){
                tip = (this.amount[i]*0.2);
                bill= this.amount[i] + tip;
                totalBill.push(bill);
                tipBill.push(tip);
            }
             else if( bill > 50 && bill < 200){
                tip = (this.amount[i]*0.15);
                bill= this.amount[i] + tip;
                totalBill.push(bill);
                tipBill.push(tip);
            }
            else{
                tip = (this.amount[i]*0.1);
                bill= this.amount[i] + tip;
                totalBill.push(bill);
                tipBill.push(tip);
            }
        }
    }
}

var totalBill = [];
var tipBill = [];

bills.tip_calculator( totalBill, tipBill);
console.log('The tipBill array');
for( var i=0; i< tipBill.length; i++){
console.log(tipBill[i].toFixed(2));
}

console.log('The totalBill array :');
for( var i=0; i< totalBill.length; i++){
    console.log(totalBill[i]);
}
