const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName(){
      this.confirmedName = this.name;
    },
    submitForm(event){
      // event.preventDefault();
      alert('Submitted');
    },
    setName(event) { //event is predefined parameter if we use v-on:input 
      this.name = event.target.value;
    },
    incrementCounter(num){
      //return this.counter++; //both works same
      //this.counter++;
      this.counter = this.counter + num;
    },
    decrementCounter(num){
      // this.counter--;
      //return this.counter--;
      this.counter = this.counter - num;
      alert('RightClicked');
    }

  }

});

app.mount('#events');
