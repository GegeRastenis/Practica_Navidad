/*Scenario:
You only want to report the first 3 milestones, even if there are more.
Instruction:
Given:
let totalMilestones = 10;

Print:

Reporting milestone 1
Reporting milestone 2
Reporting milestone 3*/

let totalMilestones = 10;

for(let i = 1; i <= totalMilestones; i ++){
    if(i <= 3){
        console.log(`Reporting milestone ${i}`);
    }
    
}