const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        const that = this;
        setTimeout(function() {
        that.counter = 0;
        },2000);
      }
    }
    // name(value) {
    //   if(value === '') {
    //     this.fullName = '';
    //   }
    //   else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if(value === '') {
    //     this.lastName = '';
    //   }
    //   else
    //   {
    //     this.lastName = this.name + ' ' + value;
    //   }
    // }

  },
  computed: {
    fullName() {
      console.log('Running again...');
      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    // outputFullName() {
    //   console.log('Running again...');
    //   if(this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + "Veerakumar";
    // },
    setName(event) {
      this.name = event.target.value;
      this.lastName = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
        }
  }
});

app.mount('#events');
