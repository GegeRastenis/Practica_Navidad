/*Scenario:
Tasks with an ID greater than 3 are delayed.

Instruction:
Loop from 1 to 6 and print:

"On track" for tasks 1–3

"Delayed" for tasks 4–6

Expected output:

Task 1: On track
...
Task 6: Delayed*/

for(let i = 1; i <= 6; i++){
    if(i <= 3){
        console.log(`Task ${i}: On Track`);
        
    }else{
        console.log(`Task ${i}: Delayed`);
        
    }
}