/*Exercise 4 – Deadline countdown
Scenario:
A project deadline is approaching.

Instruction:
Print a countdown from 5 days to 1 day.

Expected output:
5 days remaining
4 days remaining
3 days remaining
2 days remaining
1 day remaining

📌 Real-life PM logic:
Deadlines, urgency, tracking.*/

for(let i = 5; i >= 1; i --){
    if( i >= 2){
        console.log(`${i} days remaining`);
        
    }else{
        console.log(`${i} day remaining`);
        
    }
    
}