/*Scenario:
During a sprint, the stakeholder changes the requirement.

Initial requirement:
Print tasks from 1 to 5.

New requirement:
Only print even-numbered tasks.

Expected output:

Task 2
Task 4

📌 They evaluate: adaptability + logic.*/

for(let i = 1; i <= 5; i ++){
    if(i % 2 === 0){
        console.log(`Task ${i}`);
        
    }
}