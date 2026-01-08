/*Exercise 7 – Progress tracking
Scenario:
You want to show the progress of a process from 0% to 100%.

Instruction:
Print the progress every 20%.

Expected output:
Progress: 0%
Progress: 20%
Progress: 40%
Progress: 60%
Progress: 80%
Progress: 100%

📌 Hint: Think about how much the counter increases*/

for(let i = 0; i <= 100; i += 20){
    console.log("Progress", i + "%");
    
}