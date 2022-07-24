const app = Vue.createApp({
    data() {
        return {
            inputText: '',
            name: '',
            opText: ''
        }
    },
    methods: {
        showAlert(event){
            alert('Alert is shown');
        },
        showText(event){
            this.inputText = event.target.value;
        },
        showOpText(){
            this.name = this.inputText;
        },
        showConfirmText() {
            this.opText = this.inputText;
        }
    }
});

app.mount('#assignment');