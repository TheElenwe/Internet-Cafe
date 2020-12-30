let prompt = require('prompt-sync')({sigint: true});
 let hours_user = prompt("Hours user spend");
 let check_member = prompt("Press 1 if you are a Member....Press 2 if you are not ");
 
   let x=1;
   let y=2;
  hours_user = parseFloat(hours_user * 2);
  check_member = parseFloat(check_member);

  if(check_member==x){
  tax=10
  total_amount=(hours_user *tax) /100
 
  total =(hours_user +total_amount)
   console.log(total)

 }
else if (check_member==y){
    let hours_user = prompt("Connection problem.... try again ");
    hours_user = parseFloat(hours_user * 5);
    tax=20
    
    total_amount=(hours_user *tax) / 100
    total=(hours_user + total_amount)
    console.log(total)
}
