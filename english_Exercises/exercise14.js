/*Scenario:
Stop reporting progress once 60% is reached.
Instruction:
Print progress from 0% to 100% in steps of 20%, but stop at 60%.

Expected output:

Progress: 0%
Progress: 20%
Progress: 40%
Progress: 60%*/

for(let i = 0; i <= 100; i +=20){
    console.log(`Progress: ${i} %`);
    if( i === 60){
        break; 
    }
}