const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            message: '',

        }

    },
    watch: {
        counter(value) {
            if(value > 37) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                },5000);
        }
    },
},
    computed: {
        result() {
            if(this.counter < 37)
            {
                return this.message = "Not there yet!";
            }
            else{
                return this.message = "Too much!";
            }

        }
    }, 
    methods: {
        addCounterBy5() {
            this.counter = this.counter + 5;
        },
        addCounterBy1() {
            this.counter = this.counter + 1;
        }
    }

});

app.mount('#assignment');