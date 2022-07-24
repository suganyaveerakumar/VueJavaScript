const app = Vue.createApp({
    data() {
        return {
            name: 'Suganya Veerakumar',
            age: 30,
            imageLink: 'https://img-12.stickers.cloud/packs/bf4f4268-26ac-418b-8f3f-139519567561/webp/4218a336-1064-4903-b7aa-2527f6a595a7.webp',
            enteredValue: 'Suganya Veerakumar'
                }
    },
    
    methods: {
        outputAge() {
            const addedAge = this.age + 5;
            return addedAge;
        },
        outputRandomNumber(){
            const randomNumber = Math.random();
            return randomNumber;
        }
}
});

app.mount('#assignment');