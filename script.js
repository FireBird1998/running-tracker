//array to store thr new entries 
let entries = [];

//targeting the Ul element with if entries and storing in the variable to use later 
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
/* this Function handels the event and calles for the helper function */
function handelSubmit(event) {
     event.preventDefault();//this line prevents the default behavior and does not all the page to reload.  
     const entry = Number(document.querySelector('#entry').value);//selecting and storing number type value in entry
     if(!entry) return;//if the entry is null then function will return nothing 
     document.querySelector('form').reset(); //after getting the value we are reseting the the fild with reset function
     entries.push(entry);//here we are pushing the element in the arra in the beggning
     addNewEntry(entry);//calling the addNewEntry Function 
}


/*
 Listening for the event and calling for the event loop
 */
const form = document.querySelector('form').addEventListener("submit", handelSubmit);