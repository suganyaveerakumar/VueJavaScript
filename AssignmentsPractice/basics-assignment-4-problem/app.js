const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            visiblePara: true,
            backgroundColor: ''
    }
},
computed: {
    visibility() {
        return {
            user1: this.userInput === 'user1',
            user2: this.userInput === 'user2', 
            visible: this.visiblePara,
            hidden: !this.visiblePara 
        };
    }
},
    methods: {
        togglePara(){
            this.visiblePara = !this.visiblePara;
        }
        // userSelected(user){
        //     if(userSelected('user1')){
        //         this.user1 = !this.user1;
        //     }
        //     else 
        //     {
        //         this.user2 = !this.user2;
        //     }

        // }
    }
});

app.mount('#assignment');

