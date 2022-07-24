// const buttonEl = document.querySelector('button'); // creating dom for button 
// const inputEl = document.querySelector('input'); // creating dom for input 
// const listEl = document.querySelector('ul');// creating dom for ul  

// function addGoal(){
//     const enteredValue = inputEl.value; // assigning value from input to new const
//     const listItemEl = document.createElement('li');// creating new dom
//     listItemEl.textContent = enteredValue; // listitemel text content assigned to entervalue
//     listEl.appendChild(listItemEl); // inserting as list
//     inputEl.value = ''; // once insert done, clearing the input field
// }

// buttonEl.addEventListener('click', addGoal); // setting the button with event and function

Vue.createApp({
    data() { //creating bean
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

