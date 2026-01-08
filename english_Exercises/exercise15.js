/*Scenario:
When risk 4 is detected, escalate and stop reviewing.
Instruction:
Loop from 1 to 6 and print:
Reviewing risk X

But when X === 4, print:
Risk escalated

…and stop the loop.*/

for(let i = 1; i <= 6; i++){
    console.log(`Reviewing risk ${i}`);

    if( i === 4){
        console.log("Risk escalated");
        break; 
    }
    
}