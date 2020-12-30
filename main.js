let prompt = require('prompt-sync')({sigint: true});
 let hours_user = prompt("Hours user spend");
 let check_member = prompt("You are member  ?");

let x=1;
let y=2;
 hours_user = parseFloat(hours_user  );

 
 check_member = parseFloat(check_member);
 


 if(check_member==x){
 tax=10
 total_amount=(hours_user *tax) /100
 
 total =(hours_user +total_amount)
console.log(total)

 }
else if (check_member==y){
   
    tax=20
    
    total_amount=(hours_user *tax) / 100
    total=(hours_user + total_amount)
    console.log(total)
}

