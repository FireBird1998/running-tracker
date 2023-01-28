
const goal = 25;

document.getElementById('target').innerText = goal;
//array to store thr new entries 

let entries = [];

//targeting the Ul element with id entries and storing in the variable to use later 
const  entryesWrapper = document.querySelector('#entries');


/*
This function removes the first child emement and then creates a li element with createElemet.
Takes new entry and converts it to text using createTextNode function and stores it in the listValue variable.
after that we appent child elemt to parent element. 
*/ 
function addNewEntry(newEntry){
     entryesWrapper.removeChild(entryesWrapper.firstElementChild);
     const listItem = document.createElement('li');
     const listValue = document.createTextNode(newEntry);
     listItem.appendChild(listValue); 
     entryesWrapper.appendChild(listItem);

}

function reducer(total, currentValue){
     return total + currentValue;
}

function calcTotal() {
     const totalValue = Number((entries.reduce(reducer)).toFixed(1));
     document.getElementById('total').innerText = totalValue; 
     document.getElementById('progressTotal').innerText = totalValue;
}

function calcAverage() {
     const average = Number((entries.reduce(reducer) / entries.length).toFixed(1));
     document.getElementById('average').innerText = average;
}

function weeklyHigh(){
     const high = Math.max(...entries);//spread operator is represented with ... and it is responsible for spreading the array from [A,b,c] to a,b,c
     document.getElementById('high').innerText = high;// dom update
}

function calcGoal(){
     const totalValue = Number((entries.reduce(reducer)).toFixed(1));
     const percent = Number(totalValue / (goal / 100));
     const progressCircle = document.getElementById('progressCircle');
     if(percent > 100) percent === 100; 
     progressCircle.style.background = `conic-gradient(#0ad9ff ${percent}%, #141c22 ${percent}% 100%)`; 
}

/* this Function handels the event and calles for the helper function */
function handelSubmit(event) {
     event.preventDefault();//this line prevents the default behavior and does not all the page to reload.  
     const entry = Number(document.querySelector('#entry').value);//selecting and storing number type value in entry
     if(!entry) return;//if the entry is null then function will return nothing 
     document.querySelector('form').reset(); //after getting the value we are reseting the the fild with reset function
     entries.push(entry);//here we are pushing the element in the arra in the beggning
     addNewEntry(entry);//calling the addNewEntry Function 
     calcTotal();
     calcAverage();
     weeklyHigh();
     calcGoal();
}


/*
 Listening for the event and calling for the event loop
 */
const form = document.querySelector('form').addEventListener("submit", handelSubmit);