/*Exercise 8 – Risk review (conditional logic)
Scenario:
As a PM, you review risks identified during a project.
Instruction:
Loop from 1 to 5 and print:

"Low risk" for risks 1 to 3

"High risk" for risks 4 and 5

Expected output:
Risk 1: Low risk
Risk 2: Low risk
Risk 3: Low risk
Risk 4: High risk
Risk 5: High risk*/

for(let i = 1; i <= 5; i++){
    if(i <= 3){
        console.log(`Risk ${i}: Low Risk`);
        
    }else{
        console.log(`Risk ${i}: High Risk`);
        
    }
}